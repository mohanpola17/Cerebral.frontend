const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "425078",
    database: "dashboard_data",
});

// API for Component 2
app.get("/component_2", (req, res) => {
    db.query("SELECT * FROM component_2", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// API for Component 4
app.get("/component_4", (req, res) => {
    db.query("SELECT * FROM component_4", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// API for Component 6
app.get("/component_6", (req, res) => {
    db.query("SELECT * FROM component_6", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
