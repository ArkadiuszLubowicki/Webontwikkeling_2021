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

        


        //let list = await client.db().admin().listDatabases();
        //console.log(list);

        //await client.db(DATABASE).collection(COLLECTION).insertMany(movies);
        //await client.db(DATABASE).collection(COLLECTION).deleteMany({});

        let cursor = await client.db(DATABASE).collection(COLLECTION).find({});
        let result = await cursor.toArray();
        console.log(result);
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