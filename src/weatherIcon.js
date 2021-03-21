import React from "react";
import "./weatherIcon.css";

export default function WeatherIcon() {
  return (
    <div className="WeatherIcon"> 

    <img alt="" src="http://openweathermap.org/img/wn/01d@2x.png"/>
      <h2 className="tempMain">
        20
      <span>°C
        </span>
      </h2>
    <form className="celsiusFahrenheit">
      <div className="d-grid gap-2 d-md-block">
      <button id="celsiusButton" className="btn btn-primary active" type="button">°C</button>
      <button className="btn btn-primary" type="button">°F</button>
      </div>
    </form>
    
    
    </div>

  );
}

