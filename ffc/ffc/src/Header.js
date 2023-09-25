import React from "react";
import logo from "/workspaces/FFC/ffc/ffc/src/images/img1.jpeg";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>FFC</h2>
        <img src= {logo} alt=""></img>
        </div>
        <h1>Welcome to Our English School</h1>
          
        <button className="login-button">Estude conosco</button>
      </nav>
    </header>
  );
};

export default Header;
