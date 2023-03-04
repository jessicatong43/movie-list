const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const controller = require('./controller');

app.use(express.static('client/dist'));  // DO NOT TOUCH
app.use(express.json());

// G1) Route requests to the proper controller (see #2 in controller.js)
// Router
app.get('/movies', controller.get);
app.post('/movies', controller.post);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})



// NOTES FROM MATT
// query database instead of /api/movies
// callback/promises = a way to pass data amongst files (fetch quest)
// bookmark documentation to use on TA