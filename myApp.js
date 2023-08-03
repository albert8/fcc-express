require('dotenv').config();
let express = require('express');
let app = express();

//define asset folder
assets = express.static( __dirname +  "/public");
// load asset folder
app.use('/public',assets); 


//load api

app.get('/json',(req,res) => {

    let messageStyle = process.env.MESSAGE_STYLE;
    let messageValue = '';
    if ( messageStyle == "uppercase") {
        messageValue = "Hello json".toUpperCase();
    } else {
        messageValue = "Hello json";
    }
    res.json({
        message: messageValue
    });
});



// load html
app.get('/',(req, res) => {
    //    res.send("Hello Express");
    absolutePath = __dirname + '/public';
    res.sendFile(absolutePath);
});


















 module.exports = app;
