import { useState } from "react";

const api = {
  key: "e8810468276983ffcf039ee331d5a392",
  base: "http://api.openweathermap.org/data/2.5",
};


function App() {

  const { Search, setSearch } = useState("");

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
