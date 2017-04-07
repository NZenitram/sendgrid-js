const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sg_webhook';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE users( id SERIAL PRIMARY KEY, username VARCHAR(40) not null, email VARCHAR(255) not null, password VARCHAR(255) not null )' );
query.on('end', () => { client.end(); });
