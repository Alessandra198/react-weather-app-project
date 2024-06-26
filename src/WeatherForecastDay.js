import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="temperatures">
        <span className="temperature-max">{maxTemperature()}</span>
        <span className="temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
