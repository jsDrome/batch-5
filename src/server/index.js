const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static('_dist'));

app.get('/factorial', (req, res) => {
  const value = req.query.value;
  res.send(factorial(+value).toString());
});

const factorial = num => {
  num = Math.abs(num);
  // eslint-disable-next-line no-magic-numbers
  if(!num) return 1;
  // eslint-disable-next-line no-magic-numbers
  return num * factorial(num - 1);
};

app.listen(PORT, () => console.log('SERVER STARTED in port ' + PORT));