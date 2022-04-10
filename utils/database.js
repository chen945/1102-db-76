const { Pool } = require("pg");

// set production variable. This will be called when deployed to a live host
const isProduction = process.env.NODE_ENV === "production";

let pool;

if (isProduction) {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
    });
} else {
    pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "crown2_76(1102)",
        password: "0000",
        port: "5432",
    });
}

// pool.query('SELECT * from category_xx', (err, res) => {
//   console.log(JSON.stringify(res.rows));
//   pool.end();
// });

module.exports = pool;

//rpigniymfswhov:c147acf8dcb894d7b1cc5d0953d30b562cf8864bdeaf55b2f70489aa7a6cec95@ec2-3-230-238-86.compute-1.amazonaws.com:5432/dckvo1krln95i

/*Host:ec2-3-230-238-86.compute-1.amazonaws.com 
  Port:5432
  database:dckvo1krln95i
  User:rpigniymfswhov
  password:c147acf8dcb894d7b1cc5d0953d30b562cf8864bdeaf55b2f70489aa7a6cec95
*/
