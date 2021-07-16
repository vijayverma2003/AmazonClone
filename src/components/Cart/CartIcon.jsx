import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

function CartIcon() {
  const { quantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="shopping-cart">
      <span className="cart-icon"></span>
      <p className="cart-text">Cart</p>
      <span className="cart-quantity">{quantity}</span>
    </Link>
  );
}

export default CartIcon;
