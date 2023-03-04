// Queries the db and shapes response data
const db = require('./database.js');

const getAll = (callback) => {
  // console.log('2) The controller is invoking the model');

// G3) Model queries database (see #G4 in database.js)
  db.connection.query(
    'SELECT * FROM movies',
    // G5) Model receives results from db and passes them to handler callback (see #G6 in controller.js)
    function(err, results) {
      callback(err, results);
    }
  );
};

// const post = (req, res) => {
//   res.send('Request posted!')
// };

exports.getAll = getAll;
// exports.post = post;