module.exports = {
    sum: function (req, res) {
        const { number1, number2 } = req.params;
        res.json({name: 'Suma', suma: parseInt(number1) + parseInt(number2)});
        res.status(201).send();
    },

    substract: function (req, res) {
        const { number1, number2 } = req.params;
        res.json({name: 'Resta', Resta: parseInt(number1) - parseInt(number2)});
        res.status(201).send();
    },

    multiply: function (req, res) {
        const { number1, number2 } = req.params;
        res.json({name: 'Multiplicacion', Multiplicacion: parseInt(number1) * parseInt(number2)});
        res.status(201).send();
    },

    divide: function (req, res) {
        const { number1, number2 } = req.params;
        if(parseInt(number2) === 0 ){
            res.json({name: 'Division', Division: "No se puede dividir entre 0 intenta otro numero"});
        }
        res.json({name: 'Division', Division: parseInt(number1) / parseInt(number2)});
        res.status(201).send();
    }
};
