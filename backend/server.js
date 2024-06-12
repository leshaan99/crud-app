const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get("/", (req, res) => {
    res.json("Hellow from Backend")
})

app.listen(8081, () => {
    console.log("listening");
})