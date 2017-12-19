const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));
app.use(serveStatic(__dirname, {'index': ['src/index.html']}));

var content = {};

fs.readFile('src/script.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  content = data;
});

app.get('/', (req, res) => {
    res.send(content);
});

const port = process.env.PORT || '3002';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));