const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
   

    
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: Integer,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    confirmpassword: {
        type: String
    }
})
const usermodel = mongoose.model("user", userSchema);

module.exports=usermodel