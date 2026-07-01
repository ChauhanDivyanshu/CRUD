const express = require("express");
const cors = express("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());


mysql.createConnection({
    host: "localhost",
    port: 3300,
    user: "root",
    password: "",
    database: "admin"
})

    app.get("/", (req, res) => {
        res.send("Welcome to my API");
        res.json("Hello From Admin");
     })


app.listen(8082, () => {
    console.log("listening");
})