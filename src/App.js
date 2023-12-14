import { useState } from "react";

const api = {
  key: "7d4f151c7d97b3c9b10ce95280eac359",
  base: "api.openweathermap.org/data/2.5",
};

function App() {
  const [Search, setSearch] = useState("");
  const searchPress = () => {
    fetch(`${api.base}weather?q=${Search},&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      {/* header */}
      <header>
        <h1>wether App</h1>
      </header>

      {/* search box */}
      <div>
        <input
          type="text"
          placeholder="search ..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPress}>Search</button>
      </div>

      {/* location */}
      {/* hard code for yet */}
      <p>Sri lanka</p>

      {/* Temperature f/c */}
      <p>32 f</p>

      {/* Condition */}
      <p>Sunny</p>
    </div>
  );
}

export default App;
