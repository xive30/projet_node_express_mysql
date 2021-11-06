const mysql = require('mysql');

const bdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tuto_mysql",
    port: 3307
});

bdd.connect(function(err) {
    if (err) throw err; //pest ce que c'esst une erreur de connection a la database
    console.log("connected!");
});

module.exports = bdd;