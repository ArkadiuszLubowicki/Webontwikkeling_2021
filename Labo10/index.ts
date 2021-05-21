const {MongoClient, ObjectId} = require('mongodb');
const uri = "mongodb+srv://arek:averyweakpassword@webontwikkeling.mnqus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true});

const DATABASE = "WebOntwikkeling";
const COLLECTION = "Movies";

interface Movie {
    name: string;
    myScore: number;
    timesViewed: number;
}

//let movies:Movie[] = [
//    {name: "The Matrix", myScore: 90, timesViewed: 10},
//    {name: "Pulp Fuction", myScore: 100, timesViewed: 100},
//    {name: "Monster Hunter", myScore: 5, timesViewed:1},
//    {name: "Blade Runner", myScore: 100, timesViewed:30},
//    {name: "Austin Powers", myScore: 80, timesViewed:10},
//    {name: "Jurasic Park 2", myScore: 40, timesViewed:1},
//    {name: "Ichi the Killer", myScore: 80, timesViewed:1}
//];

const doDBCalls = async() =>{
    try{

        await client.connect();
        console.log("-------------");
        console.log("FIRST MOVIE");
        console.log("-------------")
        let firstMovie = await client.db(DATABASE).collection(COLLECTION).findOne({});
        console.log(firstMovie);

        console.log("-------------");
        console.log("SCORES");
        console.log("-------------")
        let cursor = await client.db(DATABASE).collection(COLLECTION).find({});
        let allMovies = await cursor.toArray();
        allMovies.forEach((m:Movie)=>{
            console.log(m.myScore);
        })

        console.log("-------------");
        console.log("ALL TIMES VIEWED");
        console.log("-------------")
        let timesViewedTotal = 0;
        allMovies.forEach((m:Movie)=>{
            timesViewedTotal += m.timesViewed;
        })
        console.log(timesViewedTotal);

        console.log("-------------");
        console.log("30 - 85");
        console.log("-------------")
        cursor = await client.db(DATABASE).collection(COLLECTION).find({
            myScore:{$gt:30,$lt:85}});
        let moviesBetween30_85 = await cursor.toArray();
        moviesBetween30_85.forEach((m:Movie)=>{
            console.log(m.name, m.myScore);
        })

        console.log("-------------");
        console.log("30 - 85 OR ATLEAST VIEWED ONCE");
        console.log("-------------")
        cursor = await client.db(DATABASE).collection(COLLECTION).find({
            $or:[{myScore:{$gt:30,$lt:85}},{timesViewed:1}]
        });
        let moviesBetween30_85ORViewedOnce = await cursor.toArray();
        moviesBetween30_85ORViewedOnce.forEach((m:Movie)=>{
            console.log(m.name, m.myScore, m.timesViewed);
        })


        //let list = await client.db().admin().listDatabases();
        //console.log(list);

        //await client.db(DATABASE).collection(COLLECTION).insertMany(movies);
        //await client.db(DATABASE).collection(COLLECTION).deleteMany({});

        //PRINT ENTIRE DB
        //let cursor = await client.db(DATABASE).collection(COLLECTION).find({});
        //let result = await cursor.toArray();
        //console.log(result);
    }
    catch(exc){
        console.log(exc);
    }
    finally{
        await client.close();
    }
}
doDBCalls();

export {};