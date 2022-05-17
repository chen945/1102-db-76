var express = require("express");
var router = express.Router();

const Category_76 = require("../models/Category_76");
const Shop_76 = require("../models/Shop_76");
const crown2Controller_76 = require("../controllers/crown2Controllers_76");

/* GET home page. */
router.get("/", crown2Controller_76.getCategories);

router.get("/shop_76/:category", crown2Controller_76.getProductsByCategory);

module.exports = router;
