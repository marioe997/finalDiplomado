module.exports = {
    sum: function (req, res) {
        const { numeroq, numero2 } = req.params;
        console.log("Hola");
        console.log(numeroq);
        res.json([{id: 1, name: 'QA Test App', suma: numeroq + numero2}]);
    },

    substract: function (req, res) {
        res.status(201).send();
    },

    multiply: function (req, res) {
        res.status(201).send();
    },

    divide: function (req, res) {
        res.status(201).send();
    }
};
