import React from "react";
import "./App.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs"; 


function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <AboutUs/>
    </div>
  );
}

export default App;
