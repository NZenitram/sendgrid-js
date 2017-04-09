var dbOperations = function(){
  const pg = require('pg');
  const rp = require('request-promise')
  const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sg_webhook';
  const client = new pg.Client(connectionString);
  var express = require('express');
  var app = express();

};

module.exports = dbOperations;
