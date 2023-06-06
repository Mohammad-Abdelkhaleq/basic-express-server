'use strict';
require('dotenv').config();
const port = process.env.PORT; 
const app= require('./src/app')
app.start(port)
