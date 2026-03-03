import asyncHandler from "../utils/asyncHandler.js"
import ApiError from "../utils/ApiError.js"
import User from "../models/User.js";
import uploadOnCloudinary from "../utils/cloudinary.js"
import ApiResponse from "../utils/ApiResponse.js"


const registerUser = asyncHandler(async (req, res) => {
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


    const { fullname, username, email, password, objectId, watchHistory, coverImage } = req.body
    console.log("Email", email);
    console.log("Name", username);
    console.log("FullName", fullname);
    console.log("Password", password);
    console.log("ObjectId", objectId);
    console.log("WatchHistory", watchHistory);
    console.log("CoverImage", coverImage);


    res.status(200).json({
        message: "Detail posted sucessfully!!",
        ObjectId:objectId,
        Email:email,
        Name:username,
        Fullname:fullname,
        Password:password,
        watchHistory:watchHistory,
        CoverImage:coverImage
    })

    if (
        [fullname, username, email, password, objectId, watchHistory, coverImage].some(() => field?.trim() === "")
    ) {
        throw new ApiError(400, "All Fields are required!!")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User already exists!!")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0].path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avater is required!!");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const cover = await uploadOnCloudinary(coverImageLocalPath);
    if (!avatar) {
        throw new ApiError(400, "Avater is required!!");
    }
    const User = await User.create(
        {
            fullname,
            avatar: avatar.url,
            coverImage: cover?.url || "",
            email,
            password,
            username: username.toLowerCase()
        }
    )
    const createdUser = await User.findById(User._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user!!")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered sucessfully✅")
    )

})

export default registerUser;