var express = require('express');
var router = express.Router();

/* GET other page. */
router.get('/', function(req, res, next) {
  let trash = {
    hello: 'wordldldldldld'
  }
  res.json(trash);
});

module.exports = router;
