import { DB_URL } from "./config";
import mongoose from "mongoose";

mongoose.connect(DB_URL, () =>{
    console.log("db is conneted")
});