var express = require('express');
var router = express.Router();
const path = require('path');
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

/* GET home page. */
router.get('/', function(req, res, next) {
  dogstatsd.increment('my_counter');
  res.sendFile(path.join(__dirname, '../main.html'));
});

module.exports = router;
