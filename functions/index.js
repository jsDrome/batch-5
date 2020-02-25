const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/factorial', (req, res) => {
  const value = req.query.value;
  res.send(factorial(+value));
});

const factorial = num => {
  num = Math.abs(num);
  // eslint-disable-next-line no-magic-numbers
  if(!num) return 1;
  // eslint-disable-next-line no-magic-numbers
  return num * factorial(num - 1);
};

exports.factorial = functions.https.onRequest(app);