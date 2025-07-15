// __dirname  __filename module  require  exports


//console.log(__dirname);
//console.log(__filename);


//console.log(da(2,5));

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(require('./routes/index.js'));/*
app.get('/register',(req,res,next)=>{
    res.send('<html><body><h1>Hello pali</h1></body></html>');
} );*/

//app.use('/register',require('./routes/register.js'));


app.listen(3000, () => {
    console.log('Szerver fut a http://localhost:3000 címen');
});

