var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  //retreive all wiki pages
  res.send('got to GET /wiki')
});

router.post('/', (req, res, next) => {
  //submit a new page to the db
  res.send('got to POST / wiki')
});

router.get('/add', (req, res, next) => {
  //retreive the ADD PAGE form
  res.send('got to GET wiki/add')
});


modules.exports = router;
