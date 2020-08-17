const express = require("express");
const app = express();

// Middleware libraries
const bodyParser = require("body-parser");
const cors = require("cors");

// Router files
const categoriesRouter = require("./routers/categoriesRouter");
const merchantsRouter = require("./routers/merchantsRouter");
const budgetsRouter = require("./routers/budgetsRouter");
const transactionsRouter = require("./routers/transactionsRouter");

// Add middleware
app.use(bodyParser.json());
app.use(cors());

// Add routers
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/merchants", merchantsRouter);
app.use("/api/v1/budgets", budgetsRouter);
app.use("/api/v1/transactions", transactionsRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${5000}`);
});
