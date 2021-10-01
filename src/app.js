const express = require('express');
const logger = require('morgan');
require('dotenv').config({ path: `${__dirname}/../.env` });

console.log(`App Name: ${process.env.APP_NAME}`);

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
require('./db/db');

const app = express();

// view engine setup
app.set('view engine', 'ejs');    
app.set('views', __dirname + '/views');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // since every file inside public/css is static; and used it for frontend 
//app.use(express.urlencoded({ extended: false }));


 

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
