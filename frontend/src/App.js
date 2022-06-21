import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (

    <div className="App">
      <div className="flex items-center justify-center lg:justify-start">
        {/* <h1 className="text-3xl lg:text-5xl font-semibold sm:text-left inline-block">
          React Pokédex
        </h1> */}
      </div>
      <SearchBar placeholder="Enter a pokemon name..." />
    </div>
  );
}

export default App;
