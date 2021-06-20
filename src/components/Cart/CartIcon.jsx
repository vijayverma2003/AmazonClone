import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

function CartIcon() {
  const { quantity } = useContext(CartContext);
  return (
    <Link to="/cart" className="shopping-cart">
      <div className="cart-icon"></div>
      <p className="cart-text">Cart</p>
      <div className="cart-quantity">{quantity}</div>
    </Link>
  );
}

export default CartIcon;
