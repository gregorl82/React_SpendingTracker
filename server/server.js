const express = require('express');
const app = express();

// Middleware libraries
const bodyParser = require('body-parser');
const cors = require('cors');

// Router files
const categoriesRouter = require('./routers/categoriesRouter');
const merchantsRouter = require('./routers/merchantsRouter');
const budgetsRouter = require('./routers/budgetsRouter');
const transactionsRouter = require('./routers/transactionsRouter');

// Add middleware
app.use(bodyParser.json());
app.use(cors());

// Add routers
app.use("/api/categories", categoriesRouter);
app.use("/api/merchants", merchantsRouter);
app.use("/api/budgets", budgetsRouter);
app.use("/api/transactions", transactionsRouter);

app.listen(5000, () => {
    console.log("Listening on port 5000")
})