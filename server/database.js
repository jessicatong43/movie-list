// get the client
const mysql = require('mysql2');

// G4) Create a connection to db and set database (see #G5 in model.js)
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movieList'
});

exports.connection = connection;