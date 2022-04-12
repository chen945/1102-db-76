var express = require("express");
var router = express.Router();

const Category_76 = require("../models/Category_76");
const Shop_76 = require("../models/Shop_76");

/* GET home page. */
router.get("/", async function (req, res, next) {
    try {
        let results = await Category_76.fetchAll();
        console.log("results", JSON.stringify(results));
        res.render("crown2_76/index", {
            data: results,
            id: "207410076",
            title: "Crown2-DB",
        });
    } catch (err) {
        console.log(err);
    }
});

router.get("/shop_76/:category", async function (req, res) {
    console.log("category", req.params.category);

    try {
        const cid = await Category_76.fetchCatIdByName(req.params.category);
        console.log("cid", cid);
        // const results = Shop_76.fetchProductByCategory(cid);
        let results = await Shop_76.fetchProductByCategory(cid);
        console.log("results", JSON.stringify(results));
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
