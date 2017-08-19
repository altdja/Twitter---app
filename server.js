const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
require('./routes')(app);

app.all('*', function (req, res, next) {
   if (req.url === '/') return res.sendFile(path.join(__dirname + '/dist/index.html'));
   return res.status(404).send({
      code: 404,
      error: {
         type: "invalid_request_error",
         message: `Unable to resolve the request "http://localhost:8081${req.url}"`
      }
   });
});

app.listen(8080, () => {
   console.log('Twitter-app listening on port 8080!');
});