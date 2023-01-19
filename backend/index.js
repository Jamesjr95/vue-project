require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
var qs = require('qs')
const axios = require('axios')

const allowedOrigins = ['http://localhost:3000', 'https://localweatherwatch.netlify.app/']
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      let msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}))


const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const mapApiKey = process.env.MAPBOX_API_KEY

const openWeatherUrl = 'https://api.openweathermap.org/data/3.0/onecall'
const openWeatherUrl2 = 'https://api.openweathermap.org/data/2.5/weather'
const weatherApiKey = process.env.WEATHER_API_KEY

app.get('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  console.log(request.query);
  let search = request.query.q

  axios(`${mapBoxUrl}/${search}?access_token=${ mapApiKey }&types=place`).then(res=>{
    console.log(res.data);
    response.send(res.data)
  })
  .catch(error=>{
    console.log(error);
    response.send(error.message)
  })

})

app.get('/weather', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')    
  let search = request.query
  console.log(search);
  let lat = search.lat
  let lng = search.lng

  axios(`${openWeatherUrl}?lat=${lat}&lon=${lng}&exclude={part}&appid=${weatherApiKey}&units=imperial`).then(res=>{
    console.log(res.data);
    response.send(res.data)
  })
  .catch(error=>{
    console.log(error);
    response.send(error.message)
  })

})

app.get('/list', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')   
  let search = request.query
  let lat = search.lat
  let lng = search.lng

  axios(`${openWeatherUrl2}?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=imperial`).then(res=>{
    console.log(res.data);
    response.send(res.data)
  })
  .catch(error=>{
    console.log(error);
    response.send(error.message)
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})