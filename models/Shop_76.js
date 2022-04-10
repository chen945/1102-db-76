const db = require("../utils/database");

const Shop_76 = class Shop_76 {
    constructor(id, name, price, cat_id, remote_url, local_url) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.cat_id = cat_id;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    // get all categories
    static async fetchAll() {
        try {
            let results = await db.query(`SELECT * from Shop_76`);
            console.log("results", results.rows);
            return results.rows;
        } catch (e) {
            console.log("error", e);
        }
    }
};

const test = async () => {
    let results = await Shop_76.fetchAll();
    console.log("results", JSON.stringify(results.rows));
};

test();
module.exports = Shop_76;
