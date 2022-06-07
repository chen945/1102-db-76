var express = require("express");
var router = express.Router();

const db = require("../utils/database");
/* GET home page. */
router.get("/", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM book_76");
        console.log("results", JSON.stringify(results.rows));
        res.render("book_76/", {
            data: results.rows,
            id: "207410076",
            name: "Doris Hsieh",
        });
    } catch (err) {
        res.render("book_76/", {
            data: "",
            id: "207410076",
            name: "Doris Hsieh",
        });
    }
});

router.get("/create", (req, res) => {
    res.render("book_76/add_76", {
        id: "207410076",
        name: "Doris Hseih",
    });
});
module.exports = router;
