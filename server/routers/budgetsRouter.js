const express = require("express");
const pool = require("../db/db.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allBudgets = await pool.query(
      "SELECT * FROM budgets ORDER BY id ASC"
    );
    res.status(200).json(allBudgets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const budget = await pool.query("SELECT * FROM budgets WHERE id = $1", [
      id,
    ]);
    res.status(200).json(budget.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { budget_name, budget_amount, warning_limit } = req.body;
    const newBudget = await pool.query(
      "INSERT INTO budgets (budget_name, budget_amount, warning_limit) VALUES ($1, $2, $3) RETURNING *",
      [budget_name, budget_amount, warning_limit]
    );
    res.status(200).json(newBudget.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { budget_name, budget_amount, warning_limit } = req.body;
    const updateBudget = await pool.query(
      "UPDATE budgets SET (budget_name, budget_amount, warning_limit) = ($1, $2, $3) WHERE id = $4",
      [budget_name, budget_amount, warning_limit, id]
    );
    res.status(200).json("Budget was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBudget = await pool.query("DELETE FROM budgets WHERE id = $1", [
      id,
    ]);
    res.status(200).json("Budget was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
