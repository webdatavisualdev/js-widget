const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const fs = require('fs');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));
app.use(serveStatic(__dirname, {'index': ['src/index.html']}));

var content = {};
var token = '';

fs.readFile('src/script.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  content = data;
});

crypto.randomBytes(48, function(err, buffer) {
    token = buffer.toString('hex');
    console.log(token);
});

token = '2a0cf8554f2fe9bde39fe86a3bcd32fd7a670ee04a57f55b2315912376860337b36ecdf12862941a876baf6977a58b46';

app.get('/' + token, (req, res) => {
    res.send(content);
});

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'src/index.html'));
});

const port = process.env.PORT || '3002';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));