import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`); // yesa karne ka reasone ye hai ki, kabhi galti se kisi dusre server pe na connect ho jaye kyu ki prduction, testing, development ka server alag alag hote hai to vo apne ko pata rah sake  
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED ", error);
        process.exit(1)
    }
}

export default connectDB;