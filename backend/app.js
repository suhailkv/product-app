const express = require('express');
const cors = require('cors'); 
const helmet = require('helmet'); 
const compression = require('compression');

const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `.env.${env}` });

require('./connection').init()

const routes = require('./routes/index'); 

const app = express();
const port = process.env.PORT || 3000;
app.set('port',port)

app.use(cors());
app.use(helmet()); 
app.use(compression());
app.use(express.json());

app.use('/', routes);

module.exports = app;
