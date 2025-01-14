import express from 'express';
import cors from 'cors';
import "dotenv/config"
import connectDb from './config/mongodb.js';

//App config 

const app=express()
const port=process.env.PORT || 3000
connectDb();

//middlewares
app.use(express.json())
app.use(cors())


//api endpoint

app.get("/",(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>{console.log(`server started on port ${port}`)})  //server started on port 3000
