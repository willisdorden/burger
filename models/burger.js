//this will call burger controller which will call the orm.
// the orm will send a response back to burger controller.js.
// which then will send a response to burger.js
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertInto: function (burger_name, cb) {
        orm.insertInto(burger_name, function (res) {
            cb(res)
        });
    },
    updateOne: function(id,cb){
        orm.updateOne(id,function(res){
            cb(res);
        });
    }
};
module.exports = burger;



//orm.insertInto();
//orm.deleteBurger ();
//orm.updateOne ();