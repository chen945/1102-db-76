var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("hats_76/index", {
        title: "Hats",
        id: "207410076",
        name: "Doris Hsieh",
    });
});

module.exports = router;
