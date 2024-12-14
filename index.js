import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
});
import express from "express";
import cors from "cors";
import connectDB from "./connectDB/connectdb.js";
import productRoute from './routes/productRoute.js';

const app = express()

app.use(cors({
    origin:'https://product-cart-backend.vercel.app',
    methods:["POST","GET"],
    credentials:true
}))
app.use(express.json());

const DATABASE_URL="mongodb+srv://rutvikraut567:unXQqS2kCVBFVsri@cluster0.5jh9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const port = process.env.PORT || 5050

connectDB(DATABASE_URL)


app.use("/api",productRoute)

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})