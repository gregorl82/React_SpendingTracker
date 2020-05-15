const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const categoriesRouter = require('./routers/categoriesRouter');

app.use(bodyParser.json());
app.use(cors());

app.use("/api/categories", categoriesRouter);

app.listen(5000, () => {
    console.log("Listening on port 5000")
})