const express = require('express');
const app = express();

const productsRouter = require('./routes/products.routes');

app.use(express.json());
app.use('/api', [productsRouter]);

module.exports = app;