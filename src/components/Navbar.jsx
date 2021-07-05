import React, { useContext } from "react";
import CartIcon from "./Cart/CartIcon";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SearchContext from "../context/SearchContext";

function Navbar(props) {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

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
          <Link className="sign-in" to="/login">
            Sign In
          </Link>
          <CartIcon />
        </span>
      </div>
    </>
  );
}

export default Navbar;
