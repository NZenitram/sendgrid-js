const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sg_webhook';


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index.html');
});

router.get('/createuser', (req, res, next) => {
  res.render('createuser.html');
});

module.exports = router;
