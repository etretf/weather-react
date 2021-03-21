import React from "react";
import "./weatherDetail.css";

export default function weatherDetail() {
  return(
    <div className="weatherDetail">
     <ul className="wdList">
      <li>Light Rain</li>
      <li>Wind <strong>4</strong> km/h</li>
      <li>Humidity <strong>93%</strong></li>
      <li>Pressure <strong>1017</strong> hPa</li>
    </ul>
</div>
  );
}