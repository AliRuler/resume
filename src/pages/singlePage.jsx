import WeatherFutureCard from "../components/weather/weatherFutureCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleGetFiveDayWeather } from "../api/api";
import { Grid } from "@mui/material";
import Title from "../components/weather/Title";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const daysIndex = [0, 8, 16, 24, 32];

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow:'0px 0px 5px #fff'
  }));

const SinglePage = () => {
  const [cityWeatherFuture, setCityWeatherFuture] = useState({});
  const { city } = useParams();

  const handleGetData = async () => {
    const data = await handleGetFiveDayWeather(city);
    setCityWeatherFuture(data);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <Grid>
      <Title value={city} />
      <Box
        sx={{
          flexGrow: 1,
          borderRadius: 2,
          border: "1px solid #fff",
          padding: 5,
        }}
      >
        <Grid container spacing={2}>
          {daysIndex.map((index) => (
            <Grid item xs={2}>
              <Item>
                <WeatherFutureCard
                  key={index}
                  index={index}
                  cityWeatherFuture={cityWeatherFuture}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default SinglePage;
