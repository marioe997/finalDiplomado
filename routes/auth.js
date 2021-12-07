var express = require('express');
var router = express.Router();
var keyStore = require('../key-store');


router.get('/', keyStore);
router.get('/auth', keyStore);


module.exports = router;
