 
const express = require('express');
const logger = require('morgan');
//const path = require('path');
//const bodyParser = require('body-parser');
const app = express();

require('dotenv').config({ path: `${__dirname}/../.env` });


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
require('./db/db');

// view engine setup
app.set('view engine', 'ejs');    
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('homePage');
});


// Takes the raw requests and turns them into usable properties on req.body
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.static('public')); // since every file inside public/css is static; and used it for frontend 
//app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
