var express = require("express");
var router = express.Router();

const db = require("../utils/database");
//CREATE
router.post("/create", async (req, res) => {
    console.log("body", req.body);
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;

    try {
        const query = {
            text: `INSERT INTO book_76(id,name,author,price) VALUES ($1,$2,$3,$4);`,
            values: [id, name, author, price],
        };
        await db.query(query);
        res.redirect("/book_76");
    } catch (err) {
        console.log(err);
    }
});

//READ
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
