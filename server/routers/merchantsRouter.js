const express = require('express');
const pool = require('../db/db.js');

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const allMerchants = await pool.query("SELECT * FROM merchants ORDER BY id ASC");
        res.status(200).json(allMerchants.rows);
    } catch (err) {
        console.error(err.message);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const merchant = await pool.query("SELECT * FROM merchants WHERE id = $1", [id]);
        res.status(200).json(merchant.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

router.post("/", async (req, res) => {
    try {
        const { merchant_name } = req.body;
        const newMerchant = await pool.query("INSERT INTO merchants (merchant_name) VALUES ($1) RETURNING *", [merchant_name]);
        res.status(200).json(newMerchant.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { merchant_name } = req.body;
        const updateMerchant = await pool.query("UPDATE merchants SET merchant_name = $1 WHERE id = $2", [merchant_name, id]);
        res.status(200).json("Merchant was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMerchant = await pool.query("DELETE FROM merchants WHERE id = $1", [id]);
        res.status(200).json("Merchant was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;