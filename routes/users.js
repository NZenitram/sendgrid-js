const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sg_webhook';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/v1/users', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = { username: req.body.username, email: req.body.email, password: req.body.password };
   // Get a Postgres client from the connection pool
   pg.connect(connectionString, (err, client, done) => {
     // Handle connection errors
     if(err) {
       done();
       console.log(err);
       return res.status(500).json({success: false, data: err});
     }
     // SQL Query > Insert data
     client.query('INSERT INTO users(username, email, password) values($1, $2, $3)',
     [data.username, data.email, data.password]);
     // SQL Query > Select data
     const query = client.query('SELECT * FROM users ORDER BY id ASC');
     // Stream results back one row at a time
     query.on('row', (row) => {
       results.push(row);
     });
     // After all data is returned, close connection and return results
     query.on('end', () => {
       done();
       return res.json(results);
     });
   });
});



module.exports = router;
