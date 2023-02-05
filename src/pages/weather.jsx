import {Grid} from "@mui/material";
import WeatherCard from "../components/weather/weatherCard";
import {useEffect, useState} from "react";
import {handleGetOneDayWeather} from "../api/api";
import SelectCity from "../components/weather/SelectCity";
import Title from "../components/weather/Title";

export default function Weather(){
 
    const [cityWeather, setCityWeather] = useState({});
    const [city, setCity] = useState('tehran');

    const handleGetData = async () => {
        const data = await handleGetOneDayWeather(city)
        setCityWeather(data)
    }
    
    useEffect(() => {
        handleGetData()
    }, [city])

    
    return(
        <Grid container>
            <Title value={'WEATHER'}/>
            <WeatherCard cityWeather={cityWeather} city={city}/>
        </Grid>
    )
}

