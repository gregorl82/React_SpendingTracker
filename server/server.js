const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(parser.json());
app.use(cors);

app.listen(3000, function() {
    console.log(`Listening on port ${ this.address().port }`)
})