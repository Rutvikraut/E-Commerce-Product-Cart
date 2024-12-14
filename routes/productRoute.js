import express from "express"
import addProductController from "../controllers/addProductController.js"
import { upload } from "../multer/multer.js"
const router = express.Router()

router.post("/addProduct",upload.single("file"),addProductController.addProduct)
router.get("/allProducts",addProductController.displayAllProducts)

export default router