const express = require('express');

const app = express();

app.get('/', (_ ,res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;
