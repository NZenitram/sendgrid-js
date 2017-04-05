const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sg_webhook';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE users( id SERIAL PRIMARY KEY, username VARCHAR(40) no null, email VARCHAR(255), password VARCHAR(255) )'
)
