//this will call burger controller which will call the orm.
// the orm will send a response back to burger controller.js.
// which then will send a response to burger.js
var orm = require("../config/orm.js");

var burger = {
  selectAll:  function(bd) {
      orm.selectAll("burgers", function(res) {
          bd(res);
      });
  }
};

module.exports = burger;



//orm.insertInto();
//orm.deleteBurger ();
//orm.updateOne ();