const path = require('path');
const express = require('express');
const ejs = require('ejs');
const moment = require('moment');

const app = express();

app.set('view engine','ejs');

app.use(function(req, res, next) {
  res.locals.year=moment().format('YYYY');

  next();
});

app.use(express.urlencoded({ extended: false }));

app.get('/',function(req, res) {  
  res.render('index',{title: 'Home'});
});

app.get('/expenses',function(req, res) {  
  res.render('expenses',{title:'Expenses'});
});

app.get('/products',function(req, res) {  
  res.render('products',{title:'Products'});
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});