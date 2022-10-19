import express from "express";
import * as dotenv from 'dotenv';
dotenv.config()

const {log} = console;
const server = express();
const port = process.env.PORT;

server.get("/", (req, res)=>{
    res.send("The weather is cloudy 🥶")
})

server.listen(port, ()=>log(`weather api server started on ${port}`))