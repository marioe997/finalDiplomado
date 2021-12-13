var express = require('express');
var router = express.Router();
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

/* GET home page. */
router.get('/', function(req, res, next) {
  dogstatsd.increment('node.page.views', ['method.GET', 'route.contacs'])
  res.send('<p>Hola mario!!</p>');
});

module.exports = router;
