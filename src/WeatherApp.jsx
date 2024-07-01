import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: "41.73",
    max_temperature: "42.05",
    min_temperature: "41.73",
    description: "haze",
    feels_like: "41.53",
    humidity: 27,

    city: "Delhi",
    country: "IN",
  });
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <>
      <div>
        <SearchBox updateInfo={updateInfo} />
        <br />
        <WeatherCard info={weatherInfo} />
      </div>
    </>
  );
}
