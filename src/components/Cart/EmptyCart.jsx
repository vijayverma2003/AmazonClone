import React from "react";
import "../../styles/cartPage.css";
import { Link } from "react-router-dom";

function EmptyCart(props) {
  const homePageLink = (
    <Link className="select_items" to="/">
      continue shopping
    </Link>
  );

  return (
    <div className="cart-box">
      <header>
        <div>
          <span className="cart_heading">Your Amazon Cart is empty.</span>
          <p className="bolder-p">
            Check your Saved for later items below or {homePageLink}
          </p>
        </div>
      </header>
    </div>
  );
}

export default EmptyCart;
