'use strict';
const mysql = require('mysql2');

const connect = () => {
  // create the connection to database
  const connection = mysql.createPool({
    connectionLimit : 10,
    host: localhost,
    user: iliasd,
    database: lomake,
    password: Kanta13,
  });
  return connection;
};

module.exports = {
  connect: connect,
};