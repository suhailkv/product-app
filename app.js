const express = require('express');
const cors = require('cors'); 
const helmet = require('helmet'); 
const compression = require('compression');

require('./config/database').init()
const routes = require('./routes/index'); 

const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `.env.${env}` });

const app = express();
const port = process.env.PORT || 3000;
app.set('port',port)

app.use(cors());
app.use(helmet()); 
app.use(compression());
app.use(express.json());

app.use('/', routes);

module.exports = app;
