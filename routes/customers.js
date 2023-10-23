var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome new customer')
})

router.get('/dashboard', (req, res) => {
    res.render('customer', {'loginAttempts': 550, 'membersince': 2005})
})

router.get('/dummy', (req, res) => {
    res.json({"test": "dummy"})
})

module.exports = router