process.env.NODE_ENV = 'test';

var chai = require('chai')
var chaiHttp = require('chai-http');
var server = require('../app.js');
var request = require('supertest');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {
  it('should list ALL users on /api/v1/users GET', function(done) {
    chai.request(server)
      .get('/api/v1/users')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      })
  });
  it('should list a SINGLE usser on /blob/<id> GET')
  it('should add a SINGLE blob on /blobs POST', function(done){

    chai.request(server)
      .post('/api/v1/users')
      .send({username: 'Java', email: 'mocha@chai.com', password: '123456'})
      .end(function(err, res){
        console.log(res.body)
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.property('name');
        res.body.name.should.equal('Jave');
        done();
      })
  });
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob<id> DELETE');
})
