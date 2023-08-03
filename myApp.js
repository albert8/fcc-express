let express = require('express');
let app = express();

//define asset folder
assets = express.static( __dirname +  "/public");
// load asset folder
app.use('/public',assets); 

app.get('/',(req, res) => {

    //    res.send("Hello Express");


    absolutePath = __dirname + '/public';
    res.sendFile(absolutePath);
});


















 module.exports = app;
