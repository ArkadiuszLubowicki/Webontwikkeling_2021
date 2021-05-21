const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engin', 'ejs');
app.set('port', 3000);

app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export {};