import React from "react";
import CartIcon from "./Cart/CartIcon";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo" />
      <input placeholder="Search" className="navbar-input" type="text" />
      <span className="nav-buttons">
        <Link className="sign-in" to="/login">
          Sign In
        </Link>
        <CartIcon />
      </span>
    </div>
  );
}

export default Navbar;
