var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend', '/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', '/build', 'index.html'));
});

app.use('/songs', cors(), indexRouter);

module.exports = app;
