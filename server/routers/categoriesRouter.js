const express = require("express");
const pool = require("../db/db.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allCategories = await pool.query(
      "SELECT * FROM categories ORDER BY id ASC"
    );
    res.status(200).json(allCategories.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );
    res.status(200).json(category.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { category_name } = req.body;
    const newCategory = await pool.query(
      "INSERT INTO categories (category_name) VALUES ($1) RETURNING *",
      [category_name]
    );
    res.status(200).json(newCategory.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { category_name } = req.body;
    const updateCategory = await pool.query(
      "UPDATE categories SET category_name = $1 WHERE id = $2",
      [category_name, id]
    );
    res.status(200).json("Category was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await pool.query(
      "DELETE FROM categories WHERE id = $1",
      [id]
    );
    res.status(200).json("Category was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
