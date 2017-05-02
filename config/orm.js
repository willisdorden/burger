var connection = require("./connection.js");

var orm= {

    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },


    insertInto: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        connection.query(queryString, [burger, false], function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(id, cb){
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString,[{devoured: true},{id:id}],function(err,res){
            if(err)
                throw err;
                cb(res);
        });
    },
    deleteBurger: function(id,cb){
        var queryString = "Delete from burgers WHERE ?";
        connection.query(queryString,[{id:id}],function(err,res){
            if(err)
                throw err;
            cb(res);
        });
    }
};


module.exports = orm;