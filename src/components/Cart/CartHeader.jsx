import React from "react";
import { Link } from "react-router-dom";

function CartHeader(props) {
  return (
    <header className="cart-header">
      <div>
        <div className="cart_heading">Shopping Cart</div>
        <Link className="select_items" to="/">
          Continue Shopping
        </Link>
      </div>
      <div className="cart-page-column">
        <span className="price_text">Price</span>
      </div>
    </header>
  );
}

export default CartHeader;
