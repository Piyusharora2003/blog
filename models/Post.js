const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    // publishtime:{
    //     type:Date,    
    // },
    title:{
        type:String,
        required:[true,"Please enter the title"],
        trim:true,
        unique:true
    },
    // author:{
    //     type: mongoose.Schema.ObjectId,
    //     ref:"user",
    //     // required:true,
    // },
    category:{
        type:String,
        required:true,
    },
    coverimg:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        default:0
    },
    tags:[{
        type:String,
    }],
    // reviews:[{
    //     user:{
    //         type: mongoose.Schema.ObjectId,
    //         ref: "user",
    //         required: true,
    //         unique:true
    //     },
    //     username:{
    //         type: String,
    //         required: true,
    //     },
    //     rating:{
    //         type:Number,
    //         require:true,
    //         min:0,
    //         max:5
    //     },
    //     description:{
    //         type:String,
    //     }            
    // }]
})


module.exports = mongoose?.models?.Posts || mongoose.model("Posts",PostSchema);