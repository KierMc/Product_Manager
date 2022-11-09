const productController = require("../controllers/product.controller")

module.exports = app => {


    app.get("/api/products", productController.getall)

    app.post("/api/product/new", productController.create)

    app.get("/api/product/:id", productController.getone)

    app.put("/api/product/update/:id", productController.update)

    app.delete("/api/product/delete/:id", productController.delete)
}