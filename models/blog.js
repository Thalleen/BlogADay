const mongoose = require("mongoose");
const Schema = mongoose.Schema; // this is a constructor

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true}) // the second argument timestamps is optional it is mentioned to record time of insert,update

const Blog = mongoose.model("Blog",blogSchema); // look for the collection and what should it store
module.exports = Blog;