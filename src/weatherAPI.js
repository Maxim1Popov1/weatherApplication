import axios from "axios";

const weather = async(lat, lon ) => {
  const id = "616b78b60f9b8dc8cdf7d1a100814b38";
  const weatherMap = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${id}`;

  
return  axios.get(weatherMap).then((resp) => resp.data);
  
}
export default weather
