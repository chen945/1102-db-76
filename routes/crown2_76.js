var express = require("express");
var router = express.Router();

const crown2Controller_76 = require("../controllers/crown2Controllers_76");

//CREATE
router.post("/product_76/create", crown2Controller_76.createProducts);

//READ
router.get("/", crown2Controller_76.getCategories);
router.get("/shop_76/:category", crown2Controller_76.getProductsCategory);

//UPDATE
router.post("/product_76/update", crown2Controller_76.updateProduct);

//DELETE
router.get("/product_76/delete/:id", crown2Controller_76.deleteProduct);

module.exports = router;
