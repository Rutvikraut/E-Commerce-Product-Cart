import multer from "multer";

const storage=multer.diskStorage({})

export const upload=multer({storage, limits:{fileSize:500000}})