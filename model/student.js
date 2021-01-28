const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({

   

    name:{
        type:String,
        required:true
    },

    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
       

    },

    address:{
        type:String,
       


    },

    created_at:{
        type:String,
      


    },

    updated_at:{
        type:String,
      


    },   


})

module.exports = mongoose.model('student',StudentSchema)
