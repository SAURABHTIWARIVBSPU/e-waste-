const express = require("express")
const router = express.Router();

const {signUp, logIn} = require("../controllers/Auth");


//Route for user login 
router.post("/login", logIn)

//route for user signup
router.post("/signup",signUp)

module.exports = router