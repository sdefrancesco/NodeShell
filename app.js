var express = require('express');
var hbs = require('hbs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/react-npm-webpack');
var db = mongoose.connection

var app = express();

//bring in routes
var post = require('./routes/posts')

db.once('open', function() {
    console.log('connected to react-npm-webpack DB')
})

db.on('error', function(err) {
    console.log(err)
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

//routes middleware
app.use('/posts', post)

app.set('view engine', 'hbs')

app.get('/', function(req, res) {
    res.render('index')
})

// Express Server
app.listen(3000, function() {
    console.log('Server started on port 3000')
})