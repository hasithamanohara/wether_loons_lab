import React from "react";

function WeatherIcon() {
  let weatherImageSrc = "";

  if (weather) {
    const temperature = weather.main.temp;

    if (temperature < 0) {
      weatherImageSrc = "snow.jpg";
    } else if (temperature >= 0 && temperature < 10) {
      weatherImageSrc = "cool.jpg";
    } else if (temperature >= 10 && temperature < 20) {
      weatherImageSrc = "normal.jpg";
    } else if (temperature >= 20 && temperature < 30) {
      weatherImageSrc = "hot.jpg";
    } else if (temperature >= 30 && temperature < 40) {
      weatherImageSrc = "extreamhot.jpg";
    }
  }

  return <div>WeatherIcon</div>;
}

export default WeatherIcon;
