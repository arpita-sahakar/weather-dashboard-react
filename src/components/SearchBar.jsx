import React from 'react'
import axios from "axios";

function SearchBar({setTextHandler,setWeatherForecast,textHandler}) {

    const setText = (e) => {
        setTextHandler(e.target.value);
    }

    const getWeatherForecast = () =>{
        const APIKey = "2be1f85ce6c480a430250905886eb88e";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${textHandler}&appid=${APIKey}`
        
        axios.get(URL).then(res=>{
          setWeatherForecast(res.data)
          console.log(res.data)
        })
      }

    return (
        <div className="searcBar">
            <h3>Search for city</h3>
            <input onChange={setText} type="text"/>
            <button onClick = {getWeatherForecast} type="button">search</button>
        </div>
    )
}

export default SearchBar
