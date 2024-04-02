import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Sunday, 07:00",
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-control w-100"
              />
            </div>
          </div>
        </form>
        <main>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
            <div className="row mt-3">
              <div className="col-6">
                <div className="clearfix d-flex">
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <div className="float-left">
                    <span className="temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="unit">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <strong>{weatherData.humidity}%</strong>
                  </li>
                  <li>
                    Wind: <strong>{weatherData.wind} km/h</strong>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </main>
      </div>
    );
  } else {
    const apiKey = "cb4440cc8b49o2e10d5a63f3ecftcafe";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
