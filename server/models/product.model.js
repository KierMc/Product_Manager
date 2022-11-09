const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters long"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: [0.01, "Price must be greater than $0"],
    },
    description:{
        type: String,
        required: [true, "Description is required"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;