import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Card from "./components/card";
import rain from "./images/rain.gif";
import bw from "./images/bw.png";
import rainight from "./images/rainnight.gif";
import sun from "./images/brightness-high-fill.svg";
import moon from "./images/moon-fill.svg";

const App = () => {
  const [mode, setMode] = useState(moon);
  const [title, setTitle] = useState("Switch to Dark Mode");
  const toggle = (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setMode(moon);
      setTitle("Switch to Dark Mode");
    } else {
      html.classList.add("dark");
      setMode(sun);
      setTitle("Switch to Light Mode");
    }
  };

  return (
    <main>
      <div>
        <button
          className="toggle fixed-top width"
          title={title}
          onClick={() => {
            document.querySelector(".hero").classList.toggle("text-light");
            let heroimg = document.querySelector(".hero-img");
            if (heroimg.src.match(rain)) {
              heroimg.src = rainight;
            } else {
              heroimg.src = rain;
            }

            toggle();
          }}
        >
          <img src={mode} alt={mode} />
        </button>
        <h3 class="text-center animate-character fw-bolder styling">
          <span>
            {" "}
            <img src={bw} className="img-fluid w-25" alt="blueweather" />{" "}
          </span>
          BLUE WEATHER
        </h3>
      </div>

      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 hero text-center">
            <h1 className="fw-bold"> THE WEATHER APP</h1>
            <p className="fs-5 lead"> Weather is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy.On Earth, most weather phenomena occur in the lowest layer of the planet's atmosphere, the troposphere, just below the stratosphere. Weather refers to day-to-day temperature, precipitation, and other atmospheric conditions, whereas climate is the term for the averaging of atmospheric conditions over longer periods of time. When used without qualification, "weather" is generally understood to mean the weather of Earth.</p>
          </div>
          <div className="col-md-6">
            <img src={rain} alt="weather" className="rounded-3 hero-img img-fluid center" />
          </div>
        </div>
      </div>
      <h2 className="fw-bolder display-5 text-info text-center mt-5 styling1"> KNOW YOUR WEATHER CONDITION</h2>
      <Card />
    </main>
  );
};

export default App;
