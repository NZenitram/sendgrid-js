var dbOperations = function(){
  const pg = require('pg');
  const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sg_webhook';
  const client = new pg.Client(connectionString);

   this.saveUser = function(user){
    client.connect();
    const query = client.query(
      'INSERT INTO users(username, email, password) values($1, $2, $3)',
      [user.username, user.email, user.password]);
    query.on('end', () => { client.end(); });
  }
}

module.exports = dbOperations;
