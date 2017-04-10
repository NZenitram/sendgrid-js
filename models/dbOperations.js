var dbOperations = function(){
  const pg = require('pg');
  const rp = require('request-promise')
  const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sg_webhook';
  const client = new pg.Client(connectionString);
  var express = require('express');
  var app = express();

  this.findByUserName = function(username, callback) {
    const results = [];
    pg.connect(connectionString, function(err, client) {
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err });
        }

      const query = client.query('SELECT * FROM users WHERE username=($1)', [username]);
      query.on('row', (row) => {
        results.push(row);
      });
      query.on('end', (done) => {
        callback(err, results);
      });
    });
  };

  this.findByUserID = function(id, callback) {
    const results = [];
    pg.connect(connectionString, function(err, client) {
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err });
        }

      const query = client.query('SELECT * FROM users WHERE id=($1)', [id]);
      query.on('row', (row) => {
        results.push(row);
      });
      query.on('end', (done) => {
        callback(err, results);
      });
    });
  };

  this.findByUserEmail = function(email, callback) {
    const results = [];
    pg.connect(connectionString, function(err, client) {
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err });
        }

      const query = client.query('SELECT * FROM users WHERE email=($1)', [email]);
      query.on('row', (row) => {
        results.push(row);
      });
      query.on('end', (done) => {
        callback(err, results);
      });
    });
  };
};



module.exports = dbOperations;
