var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;


router.get('/', (req, res, next) => {
  //retreive all wiki pages
  res.redirect('/');
  //res.send('got to GET /wiki')
});

router.post('/', (req, res, next) => {
  //submit a new page to the db
  console.log(req.body)


  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
    .then(function () {
      res.redirect('/')
    }).catch(function(err){
      console.error(err)
      next(err)
    })
  // -> after save -> res.redirect('/');
});


router.get('/add', (req, res, next) => {
  //retreive the ADD PAGE form
  res.render('addpage')
});


module.exports = router;
