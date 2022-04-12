const db = require("../utils/database");

const hats_76 = class hats_76 {
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
            let results = await db.query(`SELECT * from hats_76`);
            console.log("results", results.rows);
            return results.rows;
        } catch (e) {
            console.log("error", e);
        }
    }
};

const test = async () => {
    let results = await hats_76.fetchAll();
    console.log("results", JSON.stringify(results.rows));
};

test();
module.exports = hats_76;
