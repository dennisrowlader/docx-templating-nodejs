const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.post('/generate', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send(
    '<html><head><title>Generate Document</title></head><body><h1>Document Input</h1><form action="/generate" method="POST"><input type="text" name="firstname" /><button type="submit">Generate Doc</button></form></body></html>'
  );
});

app.listen(3000);
