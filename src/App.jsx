/* global google */
import { React, useEffect } from "react";
import { Container, Button } from "semantic-ui-react";
import { useSelector } from "react-redux";
import weather from "./weatherAPI";
import GooglePlaces from "./autocomplete";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  
  useEffect(() => {
    let autocomplete =  window.google;
    console.log('autocomplete :>> ', autocomplete);
  }, []);

  const getWeather = (lat, lon) => {
    weather(lat, lon);
  };

  const weatherData = useSelector((state) => state.app.weatherData);

  // const autocomplete = google.maps.places;
  // console.log("autocomplete :>> ", autocomplete);

  return (
    <Container>
      <div></div>
      <div className="content">
        <div className="city-list">
          <GooglePlaces />
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
        <div className="weather">{weatherData.name}</div>
      </div>
    </Container>
  );
}

export default App;
