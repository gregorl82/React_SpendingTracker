const express = require("express");
const pool = require("../db/db.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allTransactions = await pool.query(
      "SELECT * FROM transactions ORDER BY id ASC"
    );
    res.status(200).json(allTransactions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await pool.query(
      "SELECT * FROM transactions WHERE id = $1",
      [id]
    );
    res.status(200).json(transaction.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      merchant_id,
      category_id,
      budget_id,
      amount,
      transaction_time,
    } = req.body;
    const newTransaction = await pool.query(
      "INSERT INTO transactions (merchant_id, category_id, budget_id, amount, transaction_time) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [merchant_id, category_id, budget_id, amount, transaction_time]
    );
    res.status(200).json(newTransaction.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      merchant_id,
      category_id,
      budget_id,
      amount,
      transaction_time,
    } = req.body;
    const updateTransaction = await pool.query(
      "UPDATE transactions SET (merchant_id, category_id, budget_id, amount, transaction_time) = ($1, $2, $3, $4, $5) WHERE id = $6",
      [merchant_id, category_id, budget_id, amount, transaction_time, id]
    );
    res.status(200).json("Transaction was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTransaction = await pool.query(
      "DELETE from transactions WHERE id = $1",
      [id]
    );
    res.status(200).json("Transaction was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
