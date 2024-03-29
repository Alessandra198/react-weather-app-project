import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Alessandra198"
            rel="noreferrer"
            target="_blank"
          >
            Alessandra Rinaldo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Alessandra198/react-weather-app-project"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
