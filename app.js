const express = require('express');
const app = express();

const productsRouter = require('./routes/products.routes');
const userRouter = require('./routes/user.routes');

app.use(express.json());
app.use('/api', [productsRouter, userRouter]);

module.exports = app;