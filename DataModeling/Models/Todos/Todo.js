import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    
    content: {
        type:String,
        required:true,
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos:[
        {
            //content:String (If we want it to be a string like in anyother fields)
            type: mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]//Array of Sub-Todos

},{timestamps: true});

export const Todo = mongoose.model("Todo",todoSchema);