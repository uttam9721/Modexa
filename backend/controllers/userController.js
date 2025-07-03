import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
// Route for user login
const loginUser = async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await userModel.findOne({email});

        if(!user) return res.json({success:false,message:"User doesn't exists"});
        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true,token})
        }
        
    } catch (error) {
        res.json({success:false,message:"invalid user"})
    }


}

// user register..
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    // Validate password
    if (password.length< 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = createToken(newUser._id);

    // Send success response
    return res.json({ success: true, message: "User registered successfully", newUser, token });

  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};




// Route for adminLogin
// const adminLogin = async (req,res)=>{


// }

export {loginUser,registerUser}