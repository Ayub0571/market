import Ocean from "components/Ocean/Ocean.js";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Animation from "./components/OceanAnimations/Animation.js";

function App() {
  return (
    <div>
      <Header />
      <Animation />
      <Ocean />
    </div>
  );
}

export default App;
