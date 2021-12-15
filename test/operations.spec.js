const server = require('../app.js');
const chai = require('chai');
const expect = chai.expect;


describe(`Operations`, () => {

    describe('Test Operations Controller ', () => {

            it('Test function Sum', (done) => {
                chai.request(server)
                .get('/operations/sum/7/7')
                .send({num1:7, num2:7 })
                .end( function(err,res){
                console.log(res.body)
                expect(res.body).to.have.property('suma').to.be.eql(14);
                expect(res).to.have.status(200);
                done();
                });
            });
            
            it('Test function Substract', (done) => {
                chai.request(server)
                .get('/operations/substract/10/10')
                .send({num1: 10 , num2: 10 })
                .end( function(err,res){
                console.log(res.body)
                expect(res.body).to.have.property('Resta').to.be.eql(0);
                expect(res).to.have.status(200);
                done();
                });
            });

            it('Test function multiply', (done) => {
                chai.request(server)
                .get('/operations/multiply/5/5')
                .send({num1:7, num2:7 })
                .end( function(err,res){
                console.log(res.body)
                expect(res.body).to.have.property('Multiplicacion').to.be.equal(25);
                expect(res).to.have.status(200);
                done();
                });
            });

            it('Test function divide', (done) => {
                chai.request(server)
                .get('/operations/divide/5/5')
                .send({num1:7, num2:7 })
                .end( function(err,res){
                console.log(res.body)
                expect(res.body).to.have.property('Division').to.be.equal(1);
                expect(res).to.have.status(200);
                done();
                });
            });
    })
})