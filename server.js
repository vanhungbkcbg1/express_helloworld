'use strict';

const express = require('express');
const mysql = require('mysql');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/long', (req, res) => {
  setTimeout(function () {

    res.send('demo long time request');
  },5000);
});

app.get('/query', (req, res) => {

  var con =mysql.createConnection({
      host: "mysql",
      user: "test",
      password: "test",
      database: "test"
  });


  con.connect(function(err) {
    if (err) throw err;
    con.query('select * from posts',function (err,result) {
        if(err){
          throw err;
        }

        console.log(result);
        res.send(result);
    })
  });
});

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);