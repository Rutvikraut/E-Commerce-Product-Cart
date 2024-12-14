import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String},
    imageUrl:{type:String},
    price:{type:Number},
    category:{type:String}
})

const ProductModel = mongoose.model("product",productSchema)

export default ProductModel