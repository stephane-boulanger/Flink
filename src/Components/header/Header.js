import React from "react";
import "./header.css";
import logo from "./images/flink-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <img className="logo-header" src={logo} alt="" />
        <input
          className="searchbar-header"
          type="search"
          placeholder="Recherche..."
        />
      </div>
      <div className="right-header">
        <button className="btn-cart">test</button>
        <button className="btn-admin">Admin</button>
      </div>
    </div>
  );
};

export default Header;
