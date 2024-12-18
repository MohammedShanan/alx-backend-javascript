const http = require('http');

const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Length', responseText.length);
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
