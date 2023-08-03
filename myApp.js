let express = require('express');
let app = express();

//define asset folder
assets = express.static( __dirname +  "/public");
// load asset folder
app.use('/public',assets); 


//load api

app.get('/json',(req,res) => {
    res.json({
        message: "Hello json"
    });
});



// load html
app.get('/',(req, res) => {
    //    res.send("Hello Express");
    absolutePath = __dirname + '/public';
    res.sendFile(absolutePath);
});


















 module.exports = app;
