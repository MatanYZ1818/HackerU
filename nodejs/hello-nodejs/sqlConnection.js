const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // port: 8889, // למחשבי Mac
    database: 'fullstack',
});

connection.connect(err => {
    if (err) {
        throw err;
    }

    console.log("Connection established");
});

exports.connection = connection;