const server = require('../app');
const chai = require('chai');
const expect = chai.expect;


describe(`Operations`, () => {

    describe('Realiza teste hacia el controlador de operaciones ', () => {

            it('Realiza test acia la funcion suma', (done) => {
                chai.request(server)
                .get('/operations/sum/7/7')
                .send({number1:7, number2:7 })
                .end( function(err,res){
                console.log(res.body)
                expect(res.body).to.have.property('suma').to.be.equal(14);
                expect(res).to.have.status(200);
                done();
                });
            });
            
            it('Realiza test acia la funcion resta', (done) => {
                chai.request(server)
                .get('/operations/substract/7/7')
                .send({number1:7, number2:7 })
                .end( function(err,res){
                console.log(res.body)
                expect(res.body).to.have.property('Resta').to.be.equal(0);
                expect(res).to.have.status(200);
                done();
                });
            });

            it('Realiza test acia la funcion multiplicacion', (done) => {
                chai.request(server)
                .get('/operations/multiply/7/7')
                .send({number1:7, number2:7 })
                .end( function(err,res){
                console.log(res.body)
                expect(res.body).to.have.property('Multiplicacion').to.be.equal(49);
                expect(res).to.have.status(200);
                done();
                });
            });

            it('Realiza test acia la funcion Division', (done) => {
                chai.request(server)
                .get('/operations/divide/7/7')
                .send({number1:7, number2:7 })
                .end( function(err,res){
                console.log(res.body)
                expect(res.body).to.have.property('Division').to.be.equal(1);
                expect(res).to.have.status(200);
                done();
                });
            });
   

       
        

    })
})