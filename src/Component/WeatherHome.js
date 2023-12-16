import React from "react";
import { useState } from "react";
import iconSearch from "../Assets/Image/iconSearch.png";

const api = {
  key: "7d4f151c7d97b3c9b10ce95280eac359",
  base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherHome() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div class="h-[645px] w-4/6 border-4 bg-slate-400 md:box-content bg-bg-weather_block rounded-3xl">
      <div className="flex items-center justify-center pt-12">
        <div className="w-3/6 h-10 bg-white rounded-3xl flex items-center ">
          <div
            onClick={searchPressed}
            className="w-full h-full justify-between items-center flex"
          >
            <div className=" items-center justify-center w-full h-full">
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter your location..."
                required
                className="ml-9 mt-2"
              />
            </div>

            <div className="rounded-full h-5 w-5 flex mr-6">
              <img src={iconSearch} />
            </div>
          </div>
        </div>
      </div>

      <div>
        {typeof weather.main !== "undefined" ? (
          <div className="flex flex-col text-center items-center justify-center pt-4">
            {/* Location  */}
            <div className="max-w-lg text-6xl font-semibold leading-loose text-gray-900 dark:text-black -mb-5">
              <p>{weather.name}</p>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="h-10 w-10 bg-black ">
                
              </div>
              <div className="text-4xl text-blue-500 font-bold">
                {/* Temperature */}
                <p>{weather.main.temp}°C</p>
              </div>
            </div>

            <div>
              {/* Condition*/}
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          </div>
        ) : (
          "Invalid Input"
        )}
      </div>
    </div>
  );
}

export default WeatherHome;
