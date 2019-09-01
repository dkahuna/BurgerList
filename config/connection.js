// Dependencies

var mysql = require('mysql');

// Storing the connection function given through MYSQL in a variable
var connection = mysql.createConnection ({
    host: "localhost",
    port: 3000,
    user: "host",
    password: "chocolateMint",
    database: "burgers_db"
});


connection.connect(function (err) {
    if (err) {
         console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
