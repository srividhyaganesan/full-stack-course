import { TextField} from "@mui/material";
import { Button } from '@mui/material'
import { useState } from "react";

function Searchbox({updateinfo}){
    const api_url="https://api.openweathermap.org/data/2.5/weather";
    const api_key="40410f683396b5366baec3ccfdd57413";
    let [city,setcity]=useState("");
    let [error,seterr]=useState(false);
    
    async function weatherinfo(){
        try{
            let resp=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric `);
        let jsonres=await resp.json();
        let res={
            city: city,
            temp:jsonres.main.temp,
            temp_min:jsonres.main.temp_min,
            temp_max: jsonres.main.temp_max,
            humidity: jsonres.main.humidity,
            feels_like: jsonres.main.feels_like,
            weather: jsonres.weather[0].description
        };
        console.log(res);
        return res;


    } catch(err){
        throw err;
    }
}
        
    function changecity(event){
        setcity(event.target.value);
    }
    async function handlesubmit(event){
        try{
            event.preventDefault();
            setcity("");
        let newinfo=await weatherinfo();
        updateinfo(newinfo);

        }
        catch(err){
            seterr(true)
        }
        
       
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={changecity}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>
            {error && <p style={{color:"red"}}>No such city exists</p>}
        </div>
    )
}

export default Searchbox;