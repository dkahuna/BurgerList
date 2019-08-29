// Dependencies

var mysql = require('mysql');

// Storing the connection function given through MYSQL in a variable
var connection = mysql.createConnection ({
    host: "localhost",
    port: 3000,
    user: "",
    password: "",
    database: "burgers_db"
});


connection.connect(function (err) {
    if (err) {
        throw console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;