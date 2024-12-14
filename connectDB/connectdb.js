import mongoose from "mongoose"

const connectDB = async(DATABASE_URL)=>{
    try{
        const DB_OPTIONS = {
            dbName:"product-cart"
        }
        console.log("Connecting Database")
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("Database Connected")
    }catch(error){
        console.log(error)
    }
}

export default connectDB