const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('port', 3000);
app.use(express.static('public'));

app.get('/',(req:any,res:any)=>{
    res.render("header");
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export {};