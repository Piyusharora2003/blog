const mongoose = require('mongoose');
const validator = require("validator");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
    },
    profileimg:{
        type:String
    }
    ,
    mobileno:{
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^[0-9]{10}/.test(v);
          },
          message: '{VALUE} is not a valid 10 digit number!'
    },
    email:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    bookmarkedposts:[{
        type: mongoose.Schema.ObjectId,
        ref: "post",
        required: true,
        unique:true    
    }]
},
})

module.exports = mongoose.models.User || mongoose.model("User",UserSchema);