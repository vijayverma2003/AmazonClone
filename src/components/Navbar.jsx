import React, { useContext, useState } from "react";
import CartIcon from "./Cart/CartIcon";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SearchContext from "../context/SearchContext";
import UserContext from "../context/UserContext";
import UserNavbar from "./common/UserNavbar";

function Navbar(props) {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { user } = useContext(UserContext);

  const handleChange = (query) => {
    return setSearchQuery(query);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo" />
        <span>
          <input
            id="searchBox"
            type="text"
            name="query"
            placeholder="Search"
            className="nav-input"
            onChange={(e) => handleChange(e.currentTarget.value)}
          />
          <Link to={`/search?searchQuery=${searchQuery}`}>
            <i className="fas fa-search search-icon"></i>
          </Link>
        </span>
        <span className="nav-buttons">
          <UserNavbar name={user ? user.name : "Sign In"} />
          <CartIcon />
        </span>
      </div>
    </>
  );
}

export default Navbar;
