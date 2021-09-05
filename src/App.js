import React, { useState } from "react";
import axios from "axios";
import "./App.css";




function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  
  
  const weatherCity = (e) => {
    e.preventDefault();
    // console.log(city);
    
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'26691ef000ffff049bef8b9e4e4e2ce5'}`)
      .then(function (response) {
        // handle success
        console.log(response);
        // setWeather((response.data.main.temp -273.15).toFixed(2));
        // setWeather((response.data.main.feels_like -273.15 ).toFixed(2));
      //  setWeather(response.data(weather));
      setWeather({
        feel: response.data.feels_like,
        temp: response.data.main.temp,
        mx: response.data.main.temp_max,
        mn:response.data.main.temp_min,
        humidity: response.data.main.humidity,
        press: response.data.main.pressure,
        time : response.data.sys.timezone,
    })

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
      
  };
     
  return (
    <div className="text-center App">
      
      <h1 className= "p-5">Weather App</h1>
      <form onSubmit={weatherCity} className="">
        <input className="bg-dark text-white border" type="text"value={city} onChange={(e) => setCity(e.target.value)}/>
        <br/>
        <input className="m-2 border " type="submit" value="Search" />
      </form>
      
        <p className=" text-dark ">Current Location : {city}</p>
        <p className=" text-dark ">Tem : {weather.temp} | Humidity : {weather.humidity}</p>
        <p className=" text-dark ">Max : {weather.mx} | Min : {weather.mn}</p>
      
    </div>
  );
}

export default App;
