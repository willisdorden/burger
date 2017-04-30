var connection = require("./connection.js");

var orm= {

    selectAll: function (tableName, bd) {
            var queryString = "SELECT * FROM ??" ;
            connection.query(queryString,[tableName], function (err, results) {
                if (err) {
                    throw err;
                }
                bd(results);
            });
        }
    };

module.exports = orm;