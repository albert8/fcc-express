let express = require('express');
let app = express();
//console.log("Hello World");

function getIndex(req,res) {
//    res.send('Hello Express');
    console.log('Hello Express');
}


app.get('/','getIndex');





























 module.exports = app;
