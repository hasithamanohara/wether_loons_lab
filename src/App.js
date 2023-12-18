// import "./App.css";
import WeatherHome from "./Component/WeatherHome";
import NavBar from "./Component/NavBar";
import HomeSideBar from "./Component/HomeSideBar";

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

      <div className="flex flex-row pt-4 pl-2 pr-2 space-x-3">
        {/* <div className="pt-3 pl-2 flex ">
          <WeatherHome />
        </div>
        <div className="pt-3 flex w-2/6">
          <HomeSideBar />
        </div> */}

        <div className="w-4/6 h-[640px] rounded-xl">
          <WeatherHome />
        </div>
        <div className="w-2/6 h-[645px] bg-orange-400 rounded-xl flex flex-col space-y-3 items-center justify-center pt-2 pb-2">
          <div className=" bg-green-400 w-[95%] h-[230px] rounded-xl"></div>
          <div className="bg-black w-[95%] h-[380px] rounded-xl flex flex-row space-x-3 pt-2 pb-2 items-center justify-center pl-3 pr-3">
            <div className="bg-blue-600 h-[96%] w-[48%] rounded-xl"></div>
            <div className="bg-red-600 h-[96%] w-[48%] rounded-xl flex flex-col space-y-1 items-center justify-center">
              <div className="w-[96%] h-[48%] bg-lime-400 rounded-md items-center justify-center" ></div>
              <div className="w-[96%] h-[48%] bg-purple-400 rounded-md items-center justify-center" ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
