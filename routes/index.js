var express = require('express');
var router = express.Router();

const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter);

//router.use('/user', userRouter);

var models = require('../models');
var Page = models.Page;
var User = models.User;

router.post('/', function(req, res, next) {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  var page = Page.build({
    // title: ???????,
    // content: ???????
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save();
  // -> after save -> res.redirect('/');
});


module.exports = router;
