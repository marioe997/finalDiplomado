var express = require('express');
var router = express.Router();
var operationsController = require('../controllers/operations.controller');
var middleware = require('../middleware');


router.get('/sum/:number1/:number2', operationsController.sum);
router.get('/substract/:number1/:number2', operationsController.substract);
router.get('/multiply/:number1/:number2', operationsController.multiply);
router.get('/divide/:number1/:number2', operationsController.divide);

router.use(middleware);

module.exports = router;
