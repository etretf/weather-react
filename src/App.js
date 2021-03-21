
import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./searchBar";
import City from "./city";
import WeatherIcon from "./weatherIcon";
import Forecast from "./forecast";
import OpenSource from "./openSource";


export default function App() {
  return (
    <div className="App">
       <div className="box">
          <Search />
         <div className="row">
          <div className="col-4"> 
         <City />
         </div>        
         <div className="col-4"> 
         <WeatherIcon />
         </div>        
         <div className="col-4"> 
          <Forecast/>
          <Forecast/>
          <Forecast/>
          </div>        
      <OpenSource />
    </div>
    </div>
    </div>
  );
}
