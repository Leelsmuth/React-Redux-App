import React from "react";
import Quotes from "./components/Quotes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Kanye-West
        <span role="img" aria-label="mic">
          🎤
        </span>
      </h1>
      <Quotes />
    </div>
  );
}

export default App;
