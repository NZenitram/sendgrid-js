process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'postgres://localhost:5432/sg_webhook_test';

var chai = require('chai')
var chaiHttp = require('chai-http');
var server = require('../app.js');
var request = require('supertest');
var should = chai.should();
var User = require('../models/user.js')
var dbOperations = require('../models/dbOperations.js')

chai.use(chaiHttp);

describe('Users', function() {
  const pg = require('pg');
  const connectionString = 'postgres://localhost:5432/sg_webhook_test';

  beforeEach(function(done){
    var testUser = new User("NewUserSave", "test@java.com", "123456");
    chai.request(server)
      .post('/api/v1/users')
      .send(testUser)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
    })
  });

  afterEach(function(done){
    const client = new pg.Client(connectionString);
    client.connect();
    const query = client.query(
      'TRUNCATE users' );
    query.on('end', () => { client.end(); });
    done();
  })

  it('should list ALL users on /api/v1/users GET', function(done) {
    chai.request(server)
      .get('/api/v1/users')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
      })
      done();
  });

  it('should list a SINGLE usser on /users/<id> GET', function(done){
    chai.request(server)
      .get('/api/v1/users')
      .end(function(err, res){
        var id = res.body[0].id
        console.log(id);
      .get('/api/v1/users/' +id)
      .end(function(err, res){

      })
    })
    done();
  });

  it('should add a SINGLE user on /users POST', function(done){
    var testUser = new User("NewUserSave", "test@java.com", "123456");
    chai.request(server)
      .post('/api/v1/users')
      .send(testUser)
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
      })
      done();
  });
  it('should update a SINGLE user on /user/<id> PUT');
  it('should delete a SINGLE user on /user<id> DELETE');
})
