// import "./App.css";
import WeatherHome from "./Component/WeatherHome";
import NavBar from "./Component/NavBar";

const api = {
  key: "7d4f151c7d97b3c9b10ce95280eac359",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="w-full h-full">
      <div className="pl-2 pr-2 pt-2">
        <NavBar />
      </div>
      {/* Search Box  */}

      <div className="pt-3 pl-2">
        <WeatherHome />
      </div>
    </div>
  );
}

export default App;
