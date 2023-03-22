import React from "react";
import "../styles/Nav.modules.css";
import SearchBar from "./SearchBar";

export const Nav = (props) => {
  return (
    <>
      <nav className="navbar">
        <SearchBar onSearch={props.onSearch}/>
      </nav>
    </>
  );
};
