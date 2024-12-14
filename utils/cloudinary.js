import {v2 as cloudinary} from "cloudinary";

//Configuring cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'davhljxr6', 
    api_key: process.env.CLOUDINARY_API_KEY || "761512126173377", 
    api_secret: process.env.CLOUDINARY_API_SECRET || "MhpDN7NUzQLTkLu1lxLrbbOATJE"
});

const uploadOnCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath,{ 
      resource_type: 'auto' 
    });
    
    return result.secure_url;
  } catch (error) {
    throw new Error('Error uploading to Cloudinary: ' + error.message);
  }
}
export default uploadOnCloudinary