// importing our dependencies&file(s)

var express = require('express');

var router = express.Router();


// importing the model (burgers.js) to use its database functions
var burger = require('../models/burgers.js');

// creating all the routes and set up the logic withing those routes where required

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(request, res) {
    burger.all(function(burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});



module.exports = router;
