const Category_76 = require("../models/Category_76");
const Shop_76 = require("../models/Shop_76");

//CREATE
exports.createProducts = async (req, res) => {
    console.log("body", req.body);
    res.json({ msg: "create -- body data received" });
};

//READ
exports.getCategories = async (req, res) => {
    try {
        let results = await Category_76.fetchAll();
        console.log("results", JSON.stringify(results));
        res.render("crown2_76/index", {
            data: results,
            name: "Doris Hsieh",
            id: "207410076",
        });
    } catch (err) {
        console.log(err);
    }
};

exports.getProductsCategory = async (req, res) => {
    console.log("category", req.params.category);
    try {
        const cid = await Category_76.fetchCatIdByName(req.params.category);
        // console.log("cid", cid);
        // const results = Shop_76.fetchProductByCategory(cid);
        let results = await Shop_76.fetchProductByCategory(cid);
        console.log("results", JSON.stringify(results));

        res.render("crown2_76/products_76", {
            data: results,
            title: req.params.category,
            name: "Doris Hsieh",
            id: "207410076",
        });
    } catch (err) {
        console.log(err);
    }
};
