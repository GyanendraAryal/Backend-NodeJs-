import { Schema, Model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 50
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
},
    { timestamps: true } // ✅ schema options go here
);

const User = mongoose.model("User", userSchema)

export default User;