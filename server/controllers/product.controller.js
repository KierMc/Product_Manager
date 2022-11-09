const Product = require('../models/product.model');

module.exports.getall = (req,res)=>{
    Product.find()
    .then((allProducts)=>{
        res.json({results: allProducts})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}
module.exports.create = (req,res)=>{
    Product.create(req.body)
    .then((newProduct)=>{
        res.json({results: newProduct})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}
module.exports.getone = (req,res)=>{
    Product.findOne({_id:req.params.id})
    .then((product)=>{
        res.json({results: product})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}
module.exports.update = (req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then((updatedProduct)=>{
        res.json({results: updatedProduct})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}
module.exports.delete = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then((deletedProduct)=>{
        res.json({results: deletedProduct})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}