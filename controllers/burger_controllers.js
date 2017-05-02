var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();



router.get("/", function (req, res){
    burger.selectAll(function(data){
            var burgerObject = {
                burgers:data
            };
            console.log(burgerObject);
        res.render("index", burgerObject);

    })
});

router.post("/", function(req, res) {
    burger.insertInto(req.body.burger, function(results) {
        res.redirect("/");
    });
});


module.exports = router;