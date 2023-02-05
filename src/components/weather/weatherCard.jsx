import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";

import {Cities} from "../../data/cities";
import SelectCity from "./SelectCity";

import {useEffect, useState} from "react";
import {handleGetOneDayWeather} from "../../api/api";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow:'0px 0px 5px #fff'
}));

export default function WeatherCard() {
 
    const [cityWeather, setCityWeather] = useState({});
    const [city, setCity] = useState('tehran');

    const handleGetData = async () => {
        const data = await handleGetOneDayWeather(city)
        setCityWeather(data)
    }
    
    useEffect(() => {
        handleGetData()
    }, [city])


  return (
    <Box sx={{ flexGrow: 1 ,borderRadius:2,border:'1px solid #fff',padding:5}}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <Item>
            <SelectCity currency={city} setCurrency={setCity}/>
        </Item>    
        </Grid>
        <Grid item xs={2}>
        <Item>
          <Typography variant={"body1"}>
            wind speed: {cityWeather?.wind?.speed}
          </Typography>
        </Item>  
        </Grid>
        <Grid item xs={2}>
        <Item>
          <Typography variant={"body1"}>
            degree of cloudiness: {cityWeather?.clouds?.all}
          </Typography>
        </Item>  
        </Grid>
        <Grid item xs={2}>
        <Item>
          <Typography variant={"body1"}>
            temperature: {cityWeather?.main?.temp}
          </Typography>
        </Item>  
        </Grid>
        <Grid item xs={2}>
        <Item>
          <Typography variant={"body1"}>
          weather conditions: {cityWeather?.weather?.[0]?.description}
          </Typography>
          </Item>  
        </Grid>
        <Grid item xs={2}>
        <Item>
          <Link to={`/weather/${city}`}>
            <Button sx={{ bgcolor: "common.white" }}>
            {"view the next 4 days"}
            </Button>
          </Link>
          </Item>  
        </Grid>
      </Grid>
    </Box>
  );
}


