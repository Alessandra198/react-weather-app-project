import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    } 


    let apiKey = "cb4440cc8b49o2e10d5a63f3ecftcafe";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={36}/>
          <div className="temperatures">
            <span className="temperature-max">19°</span>
            <span className="temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
