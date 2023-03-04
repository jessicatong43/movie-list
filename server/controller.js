// Controls the data being sent to db from req

const express = require('express');
const app = express();
const model = require('./model');

// G2) Controllers get req and res from router and calls model with a handler callback (see #G3 in model.js)
const get = (req, res) => {
  // console.log('1) You are hitting the controller');
  // G6) Handler callback receives results from model and handles errors or passes results to client
  model.getAll((err, results) => {
    if (err) {
      res.end(err);
    } else {
      res.end(results);
    }
  });
};

const post = (req, res) => {
  var movieTitle = req.body;
  model.create(req.body, (err, results) => {
    if (err) {
      console.log('INSIDE ERROR HANDLER');
      res.end(err);
    } else {
      res.json(results);
    }
  });
};

exports.get = get;
exports.post = post;