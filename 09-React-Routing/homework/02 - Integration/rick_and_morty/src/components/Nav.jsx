import React from "react";
import "../styles/Nav.modules.css";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export const Nav = (props) => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/about">
          <button>
            About
          </button>
        </NavLink>
        <NavLink to="/home">
          <button>
            Home
          </button>
        </NavLink>
        <SearchBar onSearch={props.onSearch}/>
      </nav>
    </>
  );
};
