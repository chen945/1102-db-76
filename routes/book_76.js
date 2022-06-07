var express = require("express");
var router = express.Router();

const db = require("../utils/database");
/* GET home page. */
router.get("/", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM book_76");
        console.log("results", JSON.stringify(results.rows));
        res.render("book_76/index", {
            data: results.rows,
            id: "207410076",
            name: "Doris Hsieh",
        });
    } catch (err) {
        console.log("err", err);
    }
});

module.exports = router;
