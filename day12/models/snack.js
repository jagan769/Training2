const mongoDB = require('mongoose');

const ProductSchema = mongoDB.Schema({
    name:String,
    price:String,
    warranty:String,
    email:String

});

module.exports = mongoDB.model('Product',ProductSchema);