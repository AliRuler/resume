import {Grid} from "@mui/material";
import WeatherCard from "../components/weather/weatherCard";
import {useEffect, useState} from "react";
import {handleGetOneDayWeather} from "../api/api";
import SelectCity from "../components/weather/SelectCity";
import Header from "../components/weather/Header";

export default function Weather(){
    const [city, setCity] = useState('tehran');
    const [cityWeather, setCityWeather] = useState({})

    const handleGetData = async () => {
        const data = await handleGetOneDayWeather(city)
        setCityWeather(data)
    }
    
    useEffect(() => {
        handleGetData()
    }, [city])

    return(
        <Grid container>
            <Header/>
            <SelectCity currency={city} setCurrency={setCity}/>
            <WeatherCard cityWeather={cityWeather} city={city}/>
        </Grid>
    )
}

