process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'postgres://localhost:5432/sg_webhook_test';

var chai = require('chai')
var chaiHttp = require('chai-http');
var server = require('../app.js');
var request = require('supertest');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {
  const pg = require('pg');
  const connectionString = 'postgres://localhost:5432/sg_webhook_test';

  beforeEach(function(done){
    const client = new pg.Client(connectionString);
    client.connect();
    const query = client.query(
      'TRUNCATE users;' );
    query.on('end', () => { client.end(); });
    done();
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
        done();
      })
  });
  it('should list a SINGLE usser on /blob/<id> GET')
    
  it('should add a SINGLE user on /users POST', function(done){

    chai.request(server)
      .post('/api/v1/users')
      .send({username: 'Java', email: 'mocha@chai.com', password: '123456'})
      .end(function(err, res){
        console.log(res.body)
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      })
  });
  it('should update a SINGLE user on /user/<id> PUT');
  it('should delete a SINGLE user on /user<id> DELETE');
})
