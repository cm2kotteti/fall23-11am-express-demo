var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<p>My first express pug app</p>');
});

router.get('/newuser', function(req, res, next) {
  res.render('index', {title : 'new user'})
});

router.get('/delete', function(req, res, next) {
  res.send(res.statusCode)
});

module.exports = router;
