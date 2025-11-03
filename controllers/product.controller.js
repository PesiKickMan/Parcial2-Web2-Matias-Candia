const Product = require('../models/product.model');


//Obtener todos los productos
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

//Obtener producto por ID
async function getProductById(req, res) {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).send({
                ok: false,
                message: 'Producto no encontrado'
            })
        }

            res.status(200).send({
            ok: true,
            message: 'Producto obtenido correctamente',
            product
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            ok: false,
            message: 'Error al obtener producto por ID'
        })
    }
}

//Crear un nuevo producto
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

//Eliminar un producto
async function deleteProduct(req, res) {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if(!deletedProduct) {
            return res.status(404).send({
                ok: false,
                message: 'No se encontró el producto a eliminar'
            })
        }

        res.status(200).send({
            ok: true,
            message: 'Producto eliminado correctamente',
            deletedProduct
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            ok: false,
            message: 'No se pudo eliminar el producto'
        })
    }
}

//Actualizar producto
async function updateProduct(req, res) {
    try {
        const id = req.params.id;
        const newData = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, newData, { new: true });

        if(!updatedProduct){
            return res.status(404).send({
                ok: false,
                message: 'No se encontro el producto a actualizar'
            })
        }

        res.status(200).send({
            ok: true,
            message: 'Producto actualizado correctamente',
            product: updatedProduct
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            ok: false,
            message: 'Error al actualizar producto'
        })
    }
}

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    deleteProduct,
    updateProduct
}