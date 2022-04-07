const mongoose  = require("mongoose");
const categorySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true //remove white space
    },
    slug:{//   convert a string to URL
        type:String,
        required:true,
        unique:true
    },
    parentId:{
        type:String //parent of element
    }

},{timestamps:true});  //assign createdAt and updatedAt fields to your schema

module.exports = mongoose.model('Category',categorySchema);