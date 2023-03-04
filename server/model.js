// Queries the db and shapes response data
const db = require('./database.js');

const getAll = (callback) => {
  // console.log('2) The controller is invoking the model');

// G3) Model queries database (see #G4 in database.js)
  db.connection.query(
    'SELECT * FROM movies',
    // G5) Model receives results from db and passes them to handler callback (see #G6 in controller.js)
    ((err, results) => {
      callback(err, results);
    })
  );
};

const create = (reqBody, callback) => {
  console.log('REQBODY TITLE =====> ', reqBody.title);
  db.connection.query(
    `INSERT INTO movies (title) VALUES ('${reqBody.title}')`,
    ((err, results) => {
      console.log('ERROR =====> ', err);
      console.log('QUERY RESULTS =====> ', results);
      callback(err,results);
    })
  );
}

exports.getAll = getAll;
exports.create = create;