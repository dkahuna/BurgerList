// Dependencies

const mysql = require('mysql');

// Storing the connection function given through MYSQL in a variable
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "chocolateMint",
    database: "burgers_db"
});
}

connection.connect();

module.exports = connection;
