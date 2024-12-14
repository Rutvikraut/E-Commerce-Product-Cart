import uploadOnCloudinary from "../utils/cloudinary.js"
import Product from "../model/products.js"
const addProduct = async(req,res)=>{
    try{
        const {name,price,category} = req.body
        const filePath = req.file.path;
        const imageUrl = await uploadOnCloudinary(filePath)
        
        const product = new Product({
            name,
            imageUrl,
            price,
            category
        })
        
        await product.save()

        res.status(200).json({ 
            status:200,
            message: 'Product added successfully',
            data:product
        });

    }catch(error){
        res.status(500).json({ message: 'Error adding product', error });
    }
    
}

const displayAllProducts = async(req,res) => {
    try{
        const products = await Product.find({})
        if(!products) return res.status(404).json({status:404,message: 'Products Not Found'})

        res.status(200).json({
            status:200,
            message:"All products fetched successfully",
            data:products
        })
    }catch(error){
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }
}

export default {addProduct, displayAllProducts}