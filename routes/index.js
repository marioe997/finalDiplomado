const index = path.resolve('./main.html');
var express = require('express');
var router = express.Router();
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

/* GET home page. */
router.get('/', function(req, res, next) {
  dogstatsd.increment('my_counter');
  res.send(index);
});

module.exports = router;
