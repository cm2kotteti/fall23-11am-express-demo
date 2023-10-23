var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'web developers of fall 23 semester' });
});

router.get('/login', function(req, res, next) {
  res.send('Login successful')
});

router.get('/addNewUser', function(req, res, next) {
  res.json({'user': 'John Wick'})
});

module.exports = router;
