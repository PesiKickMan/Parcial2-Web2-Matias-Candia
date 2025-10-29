const Product = require('../models/product.model');

async function getProducts(req, res) {
    try {
        const products = await Product.find();

        res.status(200).send({
            ok: true,
            message: 'Productos obtenidos correctamente',
            products
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            ok: false,
            message: 'Error al obtener productos'
        })
    }
}

async function postProduct(req, res) {
    try {
        const product = new Product(req.body);
        const newProduct = await product.save();

        res.status(201).send({
            ok: true,
            message: 'Producto creado correctamente',
            product: newProduct
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            ok: false,
            message: 'Error al crear producto'
        })
    }
}

module.exports = {
    getProducts,
    postProduct
}