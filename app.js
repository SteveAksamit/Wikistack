const express = require('express');
const router = express.Router();
const nunjucks = require('nunjucks');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

const models = require('./models');

// ... other stuff

models.User.sync({})
.then(function () {
    return models.Page.sync({});
})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('listening at http://localhost:3000/');
    });
})
.catch(console.error);


// app.engine('html', nunjucks.render);
// app.set('view engine', 'html');


//body parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.static('public'));

app.use('/', routes);

app.get('/', function(req, res){
  res.render('index');
});

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
