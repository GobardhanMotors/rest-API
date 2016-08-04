//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Mongodb
mongoose.connect('mongodb://localhost/rest_test');
//mongoose.connection.db.collectionNames(function (err, names){
//        console.log(names); // [{ name: 'dbname.myCollection' }]
//        module.exports.Collection = names;});
// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.get('/', function(req, res){
//    res.send('shubham');
//});

//Routes

app.use('/api', require('./routes/api'));

//Server 
app.listen(3001);
console.log('API is running on');