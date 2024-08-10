import dotenv from "dotenv"
import connectDB from "./db/connection.js";
connectDB();

dotenv.config({
    path: './env'
})






/*
 --> 1st approach

    function connectDB(){} 

    connectDB() // function call 


// --> 2nd approach by IIFE 

import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // listeners -- ki agar express kuch listen nahi kar raha to uske liye 
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
             throw error 
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/