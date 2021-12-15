const server = require('../app');
const chai = require('chai');
const expect = chai.expect;


describe(`Shipment`, () => { 

    describe('Test Shipment Controller ', () => {

            it('Test Function createShipment', (done) => {
                chai.request(server)
                .get('/shipment/createShipment')
                .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
                });
            });
            
            it('Test Function changeStatus', (done) => {
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