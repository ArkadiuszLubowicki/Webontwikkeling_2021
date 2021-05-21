const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.set('port', 3000);

let thisisme = {
    name: "Arek",
    age: 24,
    profilePic: "https://www.1limburg.nl/sites/default/files/public/styles/media-paragraph/public/istock-619961796.jpg?itok=RuN0wixY"
}

let pikachu:any = {};

const doFetch = async() => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    pikachu = await response.json();
}
doFetch();

app.get('/',(req:any,res:any)=>{
    res.render("index");
});

app.get('/whoami',(req:any,res:any)=>{
    res.render("whoami", {data:thisisme})
});

app.get('/whoamijson',(req:any,res:any)=>{
    res.json(thisisme);
});

app.get('/pikachujson',(req:any,res:any)=>{
    res.json(pikachu);
});

app.get('/pikachuhtml',(req:any,res:any)=>{
    res.render('pikachu', {pikachu: pikachu});
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export {};