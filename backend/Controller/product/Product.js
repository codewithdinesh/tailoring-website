const ProductModel = require("../../Models/product");


const Product = (req, res) => {

    const ProductId = req.params.ProductId;

    if (!ProductId) {
        return res.status(403).send({ "message": "Product not Found" })
    }


    ProductModel.findOne({ _id: ProductId }, (err, product) => {

        if (err) return res.status(400).send({ "message": "Internal Error during fetching Product" });

        if (!product) {
            return res.status(403).send({ "message": "Product not Found" });
        }

        return res.status(200).send(product);

    })



}


module.exports=Product;












