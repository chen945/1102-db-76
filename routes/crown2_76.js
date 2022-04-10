var express = require("express");
var router = express.Router();

// const Category_76 = require("../models/Category_76");

/* GET home page. */
router.get("/", function (req, res, next) {
    // try{
    //   let results = await Category_76.fetchAll();
    // console.log('results',JSON.stringify(results));
    res.render("crown2_76/index", {
        // data: results,
        id: "207410076",
        title: "Crown2-DB",
    });
    // } catch(err){
    //   console.log(err);
    // }
});

module.exports = router;
