const bodyParser = require('body-parser');

const express = require('express');

const routes = require('../routes')

const { notFound, convertError } = require('../middlewares');

/**

* Express instance

* @public

*/

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// parse body params and attache them to req.body
app.use('/v1', routes);
// app.use();
app.use(notFound);
app.use(convertError);

// app.use('/v2',reqLogging);

module.exports = app;