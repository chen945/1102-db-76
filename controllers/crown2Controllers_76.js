const Category_76 = require("../models/Category_76");
const Shop_76 = require("../models/Shop_76");

//CREATE
exports.createProducts = async (req, res) => {
    console.log("body", req.body);
    try {
        let results = await Shop_76.create(req.body);
        console.log("results", JSON.stringify(results));
        res.json({
            msg: "create -- body data received",
            data: results,
        });
    } catch (err) {
        console.log("err", err);
    }
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

//DELETE

exports.deleteProduct = async (req, res) => {
    console.log("delete id", req.params.id);
    try {
        const results = await Shop_76.deleteById(req.params.id);
        res.json({
            msg: "Deletion successful",
            data: results,
        });
    } catch (err) {
        console.log(err);
    }
};
