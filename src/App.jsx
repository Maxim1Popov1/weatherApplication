import { React, useState, useEffect } from "react";

import { Container, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import weather from "./weatherAPI";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();

  const getWeather = async (lat, lon) => {
    const  data = await weather(lat, lon)
    setWeatherData(data)
  console.log('weatherData :>> ', data.name);
  };
  
  return (
    <Container>
      <div></div>
      <div className="content">
        <div className="city-list">
          <Button onClick={() => getWeather(55.755864, 37.617698)}>
            Москва
          </Button>
          <Button onClick={() => getWeather(47.2362, 38.8969)}>Таганрог</Button>
          <Button onClick={() => getWeather(47.2313, 39.7233)}>
            Ростов-на-Дону
          </Button>
          <Button onClick={() => getWeather(51.672, 39.1843)}>Воронеж</Button>
          <Button onClick={() => getWeather(43.1056, 131.874)}>
            Владивосток
          </Button>
        </div>
        <div className="weather">{ 
          weatherData ? weatherData.name : ''
          
        }</div>
      </div>
     
    </Container>
  );
}

export default App;
