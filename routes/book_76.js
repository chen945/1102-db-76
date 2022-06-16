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

router.get("/edit/:id", async (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    try {
        const query = {
            text: `SELECT* FROM book_76 WHERE id = $1`,
            values: [id],
        };
        const results = await db.query(query);
        data = results.rows;
        res.render("book_76/edit_76", {
            id: data[0].id,
            name: data[0].name,
            author: data[0].author,
            price: data[0].price,
        });
    } catch (err) {
        console.log(err);
    }
});
//UPDATE
router.get("/update", async (req, res) => {
    try {
        const query = {
            text: `UPDATE book_76 SET name = $1, author = $2, price = $3 WHERE id = $4`,
            values: [
                req.body.name,
                req.body.author,
                req.body.price,
                req.body.id,
            ],
        };
        await db.query(query);
        res.redirect("/book_76");
    } catch (err) {
        console.log(err);
    }
});

//DELETE
router.get("/delete/:id", async (req, res) => {
    try {
        console.log("delete id", req.params.id);
        const query = {
            text: `DELETE FROM book_76 WHERE id = $1`,
            values: [req.params.id],
        };
        const results = await db.query(query);
        res.redirect("/book_76");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
