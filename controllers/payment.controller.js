const PAYMENT_FILE_PATH = 'payment-generated';
const faker = require('faker');
const fs = require('fs');
const LINE_ENDING = require('os').EOL;

module.exports = {
    create: function (req, res) {
        const fd = fs.openSync(PAYMENT_FILE_PATH, 'a');
        fs.appendFileSync(fd, faker.commerce.price() + LINE_ENDING, 'utf8');
        res.json({ message: "Se creo exitosamente un registro"});
        res.status(201).send();
    },

    applyDiscount: function (req, res) {
    //debera de restar una cantidad a cada precio en payment-generated.txt
    let price = faker.commerce.price();
    console.log(price)

    fs.readFile(PAYMENT_FILE_PATH, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data) 
      })
    res.json({ message: "Se resto correctamente el precio" });
    res.status(201).send();
    },

    getPromos: function (req, res) {
        req.json([
            {name: "BUENFIN"},
            {name: "HOTSALE"},
            {name: "CYBERMONDAY"},
            {name: "BLACKFRIDAY"},
            {name: "PRIMEDAY"},
        ]);
        res.status(201).send();
    }
};
