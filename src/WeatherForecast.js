import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
