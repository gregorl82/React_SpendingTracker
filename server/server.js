const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const pool = require('./db/db');

app.use(parser.json());
app.use(cors);

app.get("/tags", async (req, res) => {
    try {
        const allTags = await pool.query("SELECT * FROM tags");
        res.status(200).json(allTags.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/tags/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const tag = await pool.query("SELECT * FROM tags WHERE id = $1", [id]);
        res.status(200).json(tag.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

app.post("/tags", async (req, res) => {
    try {
        const {
            tag_name
        } = req.body;
        const newTag = await pool.query("INSERT INTO tags (tag_name) VALUES ($1) RETURNING *", [tag_name]);
        res.status(200).json(newTag.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`)
})