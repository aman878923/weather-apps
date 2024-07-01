import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useState } from "react";
import Search from "@mui/icons-material/Search";
export default function SearchBox({ updateInfo }) {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0081a9075a500a7510c4260bbbc3b7d9";
  let [city, setCity] = useState("");
  /**
   * Event handler for the input field.
   * Updates the state variable 'city' with the value entered by the user.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   */

  let inputCity = (event) => {
    setCity(event.target.value);
  };
  /**
   * Event handler for the form submission.
   * Prevents the default form submission behavior.
   * Calls the 'WeatherInfo' function with the entered city name.
   * Clears the input field after the submission.
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event object.
   */
  let handelSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    WeatherInfo(city);
    setCity("");
  };
  /**
   * Fetches weather data for the given city using the OpenWeatherMap API.
   * Parses the JSON response and extracts relevant information.
   * Logs the raw JSON response and the extracted information to the console.
   * @param {string} city - The city name for which to fetch weather data.
   * @returns {Promise<void>} - A promise that resolves when the weather data is fetched and processed.
   */

  let WeatherInfo = async (city) => {
    let response = await fetch(
      `${URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let JsonResponse = await response.json();
    let result = {
      temperature: JsonResponse.main.temp,
      max_temperature: JsonResponse.main.temp_max,
      min_temperature: JsonResponse.main.temp_min,
      description: JsonResponse.weather[0].description,
      feels_like: JsonResponse.main.feels_like,
      humidity: JsonResponse.main.humidity,

      city: JsonResponse.name,
      country: JsonResponse.sys.country,
    };
    console.log(JsonResponse);
    console.log(result);
    updateInfo(result);
    return result;
  };

  return (
    <>
      <div>
        <h3>search city</h3>
        <form onSubmit={handelSubmit}>
          <TextField
            id="outlined-basic"
            label="search city"
            variant="outlined"
            value={city}
            onChange={inputCity}
          />

          <Button variant="contained" type="submit ">
            <Search />
          </Button>
        </form>
      </div>
    </>
  );
}
