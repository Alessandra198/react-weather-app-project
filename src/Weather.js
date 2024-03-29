import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Paris</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix d-flex">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/windy.png"
                  alt="meteo icon"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">6</span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Precipitation: <strong>15%</strong>
                </li>
                <li>
                  Humidity: <strong>70%</strong>
                </li>
                <li>
                  Wind: <strong>20 km/h</strong>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </main>
    </div>
  );
}
