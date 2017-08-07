var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  //retreive all wiki pages
  res.redirect('/');
  //res.send('got to GET /wiki')
});

router.post('/', (req, res, next) => {
  //submit a new page to the db
  console.log(req.body)
  // res.json(req.body)
  res.json('test')
});

router.get('/add', (req, res, next) => {
  //retreive the ADD PAGE form
  res.render('addpage')
});


module.exports = router;
