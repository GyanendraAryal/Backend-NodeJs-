import asyncHandler from "../utils/asyncHandler.js"


const registerUser = asyncHandler( async(req,res) =>{
    //res.status(200).json({
        //message: "You did it!!"
    //});

    //Steps to register the User
    //Take the values from the form
    //Validations in the values-not empty
    //Check if user already exists-username,email
    //Check for images, check for avater
    //upload them in cloudinary, avatar
    //Create user Object-Create entry in DB
    //Remove password and refresh token fields from response
    //Check for user creation
    //If yes return response and if not return error message


    const {fullname,username,email,password} = req.body
    console.log("Email",email);
    console.log("Name",username);
    console.log("FullName",fullname);
    console.log("Password",password);
    
    res.status(200).json({
        message:"Detail posted sucessfully!!"
    })



})


export default registerUser;