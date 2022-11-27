const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(express.static('build/default'))
  .use(cors())
  .use(cookieParser());

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(422).send({ error: err.message });
});

const PORT = process.env.PORT || 5000;
console.log('Server on port:', PORT);
app.listen(PORT);