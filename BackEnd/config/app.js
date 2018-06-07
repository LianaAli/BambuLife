const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('../api/routes/UserRoute');
routes(app);

const endpointList = app._router.stack.filter(r => r.route).map(r => Object.keys(r.route.methods).join(',') + ' => ' + r.route.path);
console.log('LIST OF API ENDPOINTS');
console.log(endpointList);

module.exports = app;