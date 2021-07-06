import React from "react";
import { Link } from "react-router-dom";

function CartFooter({ cartProducts, totalPrice, totalQuantity }) {
  return (
    <>
      <div className="cart-footer">
        {cartProducts.length === 0 ? (
          <span className="subtotal">No items selected</span>
        ) : (
          <span className="subtotal">
            Subtotal ({totalQuantity} Items) :
            <span className="subtotal-price"> ${totalPrice.toFixed(2)} </span>
          </span>
        )}
      </div>
      <div className="cart-box checkout-box">
        <div>
          <div className="subtotal">Checkout for Products</div>
        </div>
        <Link to="/checkout" className="btn btn-tertiary btn-checkout">
          Checkout
        </Link>
      </div>
    </>
  );
}

export default CartFooter;
