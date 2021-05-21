const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('port', 3000);
app.use(express.static('public'));

let movies = [
    {name: "The Matrix", myScore: 90},
    {name: "Pulp Fiction", myScore: 100},
    {name: "Monster Hunter", myScore: 5},
    {name: "Blade Runner", myScore: 100}
];

app.get('/',(req:any,res:any)=>{
    res.render("landing");
});

app.get('/movies',(req:any,res:any)=>{
    res.render("movies", {movies:movies});
});

app.get('/movies/:x',(req:any,res:any)=>{
    let x = req.params.x;
    res.render("movie", {movie:movies[x]});
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export {};