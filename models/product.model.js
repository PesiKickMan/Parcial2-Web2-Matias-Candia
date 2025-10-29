const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    category: {
        type: String,
        default: "Varios",
        enum:["Armas", "Armaduras", "Accesorios", "Consumibles", "Varios"]
    },

    level: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },

    stock: {
        type: Number,
        required: true,
        min: 0
    },

    rarity:{
        type: String,
        required: true,
        default: "Común",
        enum:["Común", "Poco Común", "Raro", "Épico", "Legendario"]
    },

    isKeyItem: {
        type: Boolean,
        required: true,
        default: false
    }
});

// Export model
module.exports = mongoose.model('Product', productSchema);