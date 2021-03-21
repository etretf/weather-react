import React, { useState } from "react";
import "./searchBar.css";

export default function searchBar() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length>0) {alert(`It is 15°C in ${city}`)}
    else {alert("Enter a city")};
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="searchBar">
       <form onSubmit={handleSubmit}>
      <input type="text" onChange={updateCity} />
      <input type="submit" value="search" className="searchButton"/>
    </form>
    </div>
  );
}
