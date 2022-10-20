import { Router } from "express";
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config()
import model from "../../model/model.js"
// const location = global.navigator.geolocation.getCurrentPosition(successCallback,errorCallback,{timeout:10000})
// const lon = process.env.LONG //await location.coords.latitude;
// const lat = process.env.LATI  //await location.coords.longitude;
const api = `https://api.openweathermap.org/data/2.5/weather?lat=${process.env.LATI}&lon=${process.env.LONG}&appid=${process.env.API_KEY}`
export const weather = Router();


weather.get('/', async(_, res)=>{
        try {
            const app = await (await fetch(api)).json();
            console.log("hi from fetching data")
            res.send(app)
        } catch (err) {
          console.error("could not send data", err);
        }
    })

    //insert User
weather.post('/isertUser', async(request, response)=>{
  const app = await (await fetch(api)).json();
  let client_id = app.weather[0].id
  let incident_desc = app.main
  let city = app.name 
  let country = app.sys.country
  let dates = new Date().toString()
  let weather_project = app.weather

        try {
          model.query('INSERT INTO incidents (client_id, incident_desc, city, country, dates, weather_project) VALUES ($1, $2, $3, $4, $5, $6)',
          [client_id, incident_desc, city, country, dates,weather_project ], (error, results) => {
            if (error) {
              throw error
            }
            response.status(201).send(`User added with ID: ${client_id}`)
          })
        } catch (err) {
          console.error("could not send data", err);
        }
    })

    //get all user data
weather.get('/getAllUsers', async(_,response)=>{
        try {
          model.query('select * from incidents ', (error,results)=>
          {
            if(error)
            throw error
            response.status(200).json(results.rows)
          }
          )
        } catch (err) {
          console.error("could not send data", err);
        }
    })
  
weather.get('/getUserById/:id', async(req, response)=>{ 
  const id = req.params.id;
  try {
    model.query('select * from incidents where id = $1', [id], (error,results)=>
    {
      if(error)
      throw error
      response.status(200).json(results.rows)
    }
    )
  } catch (err) {
    console.error("could not send data", err);
  }
    })
    
    // const updateUser= (request, response) =>
    // {
    //   const id = request.params.id;
    //   const {incident_desc,city,country} = request.body
    //   console.log('id is ', id)
    
    //   pool.query('update users set incident_desc=$1,city=$2,country=$3 where id=$4',[incident_desc,city,country,id], (error,_)=>
    //   {
    //     if(error){
    //       throw error
    //     }
    //     response.status(200).send(`user modified with ${id}`)
    //   })
    // }

model.connect();
export default weather;