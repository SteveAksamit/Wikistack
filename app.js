const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path'); //??

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

//logging middleware
app.use(morgan('dev'));

//body parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//start the server
app.listen(3001, function(){
  console.log('listening at http://localhost:3001/')
})



// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
