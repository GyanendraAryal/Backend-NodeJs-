import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            max: 50
        },

        age: {
            type: Number,
            min: 18
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            min: 8,
            required: [true, "Password must be provided!!"]
        }
    },
    {
        timestanps: true
    }
);


export const User = mongoose.model("User", userSchema);