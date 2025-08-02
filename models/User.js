const  mongoose = require("mongoose");


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        minLength:[4,"Name should be atleast of 4 characters"],
        maxLength:[20,"Name should be atmost of 20 characters"],
        
    },
    email:{
        type:String,
        required:[true,"Name is required"],
        unique: true, 
        trim: true,
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
        maxlength: [128, "Password must be less than 128 characters"]
    }
},
{timestamp:true}
)

const User=mongoose.model("User",userSchema)

module.exports=User