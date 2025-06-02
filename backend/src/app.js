import express from "express"
import {connectDB} from "./lib/connectDB.js";
import dotenv from 'dotenv'
import { router } from "./router/vlog.router.js";
import cors from 'cors'

const app=express()
dotenv.config()
app.use(express.json())

app.use(cors(
    
    {origin:"http://localhost:5173",
        optionsSuccessStatus: 200}
    ))
app.use("/",router)
    
app.listen(5011,()=>{
    console.log("5011 port connected");
    connectDB()
    
})