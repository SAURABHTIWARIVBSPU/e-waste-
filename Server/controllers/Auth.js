const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const User = require("../models/user")


//Signup Controllers for register Users
exports.signUp = async(req,res) => {

  try{
    //get data form the body

    const {
      firstName,lastName,email,password,confirmPassword
    } = req.body

    // check all the data there or not 
      
    if(!firstName || !lastName || !email || !password || !confirmPassword){
      return res.status(403).json({
        success:false,
        message: "All fields are required",
      })
    }

    // check if password and confirm password are same
    
    if(password !== confirmPassword){
      return res.status(400).json({
        success:false,
        message:"Password and Confirm do not match. Please try again"
      })
    }

    //if user already exists

    let exitUser = await User.findOne({email})
    if(exitUser){
      return res.status(400).json({
        success:false,
        message:"User already exist. Please login."
      })
    }

    // hash the password 
    const hashedPassword = await bcrypt.hash(password,10)

    // create the user
    const user = await User.create({
      firstName,lastName,email,password:hashedPassword,confirmPassword:hashedPassword
    }) 
    
    return res.status(200).json({
      success:true,
      message:"User registered successfully."
    })

  } catch(error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    })
  }
}


// Login Controllers

exports.logIn = async (req,res) => {
  try{
    // Get email and password from the req body
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token, userId: user._id,message:"Login Successfully." });
    }
  catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Login Failure Please try Again.",
    })
  }
 
}