const { query } = require("express");
const db = require("../utils/database");

const Shop_76 = class Shop_76 {
    constructor(id, name, cat_id, price, remote_url, local_url) {
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }
    //CREATE
    static async create(body) {
        const { id, name, cat_id, price, remote_url, local_url } = body;
        const query = {
            text: `INSERT INTO shop_76 (id, name, cat_id, price, remote_url, local_url) VALUES ($1,$2,$3,$4,$5,$6)`,
            values: [id, name, cat_id, price, remote_url, local_url],
        };
        return db.query(query);
    }

    //READ
    // get all categories
    static async fetchAll() {
        try {
            const results = await db.query(`SELECT * from shop_76`);
            return results.rows;
        } catch (err) {
            console.log("error", err);
        }
    }
    static async fetchProductByCategory(id) {
        const query = {
            text: `SELECT * from shop_76 where cat_id =$1`,
            values: [id],
        };
        try {
            let results = await db.query(query);
            return results.rows;
        } catch (err) {
            console.log(err);
        }
    }

    //DELETE
    static deleteById(id) {
        const query = {
            text: `DELETE FROM shop_76 WHERE id = $1`,
            values: [id],
        };
        return db.query(query);
    }
};
// const test = async () => {
//     let results = await Shop_76.fetchProductByCategory(1);
//     console.log("test results", JSON.stringify(results));
// };

// test();

module.exports = Shop_76;
