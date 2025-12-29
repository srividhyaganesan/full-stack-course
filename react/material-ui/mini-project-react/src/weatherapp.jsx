import Searchbox from "./searchbox";
import CardComponent from "./card";
import { useScrollTrigger } from "@mui/material";
import { useState } from "react";

function Weatherapp(){
    let [weatherinfo,setweatherinfo]=useState({
        city:"Delhi",
        feels_like: 32.74,
        humidity: 88,
        temp: 27.78,
        temp_max: 28.33,
        temp_min: 27.22,
        weather: "mist"
    });

    function updateweather(newinfo){
        setweatherinfo(newinfo);

    }


    return (
        <div>
            <h2>Weather app</h2>
            <Searchbox updateinfo={updateweather}/>
            <CardComponent info={weatherinfo}/>
        </div>
    )
}
export default Weatherapp;