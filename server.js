'use strict';

const express = require('express');
// const mysql = require('mysql');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
require('./router')(app);
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);