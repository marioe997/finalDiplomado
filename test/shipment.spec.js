const server = require('../app');
const chai = require('chai');
const expect = chai.expect;


describe(`shipment`, () => {

    describe('Realiza teste hacia el controlador de operaciones ', () => {

            it('Realiza test acia la funcion createShipment', (done) => {
                chai.request(server)
                .get('/shipment/createShipment')
                .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
                });
            });
            
            it('Realiza test acia la funcion changeStatus', (done) => {
                chai.request(server)
                .get('/shipment/changeStatus')
                .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
                });
            });

       
        

    })
})