import React from "react";
import "./forecast.css";

export default function forecast() {
return(

      <div className="card">
          <div className="card-body">
          <img alt="" src="http://openweathermap.org/img/wn/01d@2x.png"/>
                <div className="forecastTemp">
                  20°C
                </div>
                <div className="forecastTime">
                  2:00
                  </div>
              </div>
            </div>
);
}