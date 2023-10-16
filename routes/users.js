var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<p>My first express pug app</p>');
});

module.exports = router;
