var express = require('express');
var router = express.Router();
var tasksController = require('../controllers/tasks.controller');
var operationsController = require('../controllers/operations.controller');
var middleware = require('../middleware');


router.get('/sum/:number1/:number2', operationsController.sum)
router.get('/substract/number1/number2', operationsController.substract)
router.get('/multiply/number1/number2', operationsController.multiply)
router.get('/divide/number1/number2', operationsController.divide);
router.get('/:id', tasksController.getById);

router.use(middleware);

router
    .post('/', tasksController.create)
    .get('/', tasksController.getAll)
    .get('/sum', operationsController.sum)
    .get('/substract', operationsController.substract)
    .get('/multiply', operationsController.multiply)
    .get('/divide', operationsController.divide);

module.exports = router;
