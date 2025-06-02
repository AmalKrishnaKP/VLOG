import mongoose from "mongoose";

const vlogSchema=new mongoose.Schema({
    title:String,
    vlog:String,
    author:String,
})

const vlogs=mongoose.model("vlogs",vlogSchema,"VLOGS")

export {vlogs}