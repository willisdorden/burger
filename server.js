var express = require('express');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");

var app = express();
var port =  process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/ json - in case we decide to use ajax
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use("/", routes);

app.listen(port);
