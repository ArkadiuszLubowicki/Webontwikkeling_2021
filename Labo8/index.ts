const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('port', 3000);

let thisisme = {
    name: "Sven",
    age: 40,
    profilePic: "https://www.1limburg.nl/sites/default/files/public/styles/media-paragraph/public/istock-619961796.jpg?itok=RuN0wixY"
}

app.get('/',(req:any,res:any)=>{
    res.render("index");
});

app.get('/whoami',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});

app.get('/whoamijson',(req:any,res:any)=>{
    res.json(thisisme);
});

app.get('/pikachujson',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});

app.get('/pikachuhtml',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));