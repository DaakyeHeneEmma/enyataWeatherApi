import express from "express";
import weather from "./api/v1/api.js"
import * as dotenv from 'dotenv';
dotenv.config()

const {log} = console;
const server = express();
const port = process.env.PORT;

server.get("/", (req, res)=>{
    res.send("Welcome to Enyata Weather Api Made by Emma Atta 🥶")
}) 
server.use("/api/v1", weather)

server.listen(port, 
    ()=>log(`weather api server started on ${port}`))