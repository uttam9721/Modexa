import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';
export const addProduct=async(req,res)=>{
    const {name,description,price,category,subCategory,bestseller,sizes}=req.body;
    try {
        const image1=req.files.image1 && req.files.image1[0]
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]


        const images = [image1,image2,image3,image4].filter((item)=>item!==undefined)

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            price,
            price:Number(price),
            subCategory,
            bestseller:bestseller==="true"?true:false,
            sizes:JSON.parse(sizes),  //it convert string to array
            image:imagesUrl,
            date:Date.now()
        }
        // console.log(productData)
        const product = new productModel(productData);
         await product.save();

        res.json({success:true,message:"Product Added",product})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }   
}



// function getProducts
export const getProducts = async(req,res)=>{
    try {
        const products = await productModel.find({});
        res.json({success:true,products});
    } catch (error) {
        res.json({success:false,message:error.message});
        
    }
}

// function getProducts
export const deleteProducts = async(req,res)=>{
    try {
        const id = req.params.id;
        const products = await productModel.findByIdAndDelete(id);
        if(!products) return res.json({message:"invalid id"})
        res.json({success:true,message:"product has been deleted",products});
    } catch (error) {
        // res.json({success:false,message:"invalid id"});
        
    }
}

// getProductById
export const getProductById = async(req,res)=>{
   try {
     const id = req.params.id;
    const product = await productModel.findById(id);
    
    res.json({success:true,product})
   } catch (error) {
    res.json({success:false,message:"invalid id"})
    
   }
}