
// Importing the ./connection.js to make connection to MySQL
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob) {
    // column1=value, column2=value2
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
insertOne: function(table, cols, vals, cb) {
    var dbQuery =
    "INSERT INTO " +
    table +
    " (" +
    cols.toString() +
    ") " +
    "VALUES (" +
    createQmarks(vals.length) +
    ") ";

    console.log(dbQuery);

    connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var dbQuery = "UPDATE " +
        table +
        " SET " +
        translateSql(objColVals) +
        " WHERE " +
        condition;

        console.log(dbQuery);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}


module.exports = orm;
