import React from "react";
import "./App.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs"; 
import { BrowserRouter as Router, Routes} from 'react-router-dom'; 
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes path="/Home"  component={RegistrationForm} /> 
        <LandingPage />
        <AboutUs />
      </div> 
    </Router>
  );
}

export default App;
