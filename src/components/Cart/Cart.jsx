import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../services/fakeProductService";
import CartProduct from "./CartProduct";
import "../../styles/cartPage.css";

function Cart() {
  const [products] = useState(Products);
  const [cartProducts, setCartProducts] = useState([]);

  let totalPrice = 0;
  let totalQuantity = 0;

  let filteredProducts = products.filter((p) => p.quantityInCart > 0);

  const handleCheckBox = (e) => {
    const checkbox = document.getElementById(e._id);
    const cart = [...cartProducts];
    if (checkbox.checked === true) {
      cart.push(e);
      setCartProducts(cart);
    } else {
      const index = cart.indexOf(e);
      cart.splice(index, 1);
      setCartProducts(cart);
    }
  };

  cartProducts.map((product) => {
    totalPrice += product.price;
    return totalPrice;
  });

  cartProducts.map((product) => {
    totalQuantity += product.quantityInCart;
    return totalQuantity;
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="cart-box">
        <header>
          <div>
            <span className="cart-heading">Your Amazon Cart is empty.</span>
            <p className="bolder-p">
              Check your Saved for later items below or ...
              <Link className="select_items" to="/">
                continue shopping
              </Link>
            </p>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-box">
        <header className="cart-header">
          <div>
            <span className="cart_heading">Shopping Cart</span>
            <br />
            <Link className="select_items" to="/">
              Continue Shopping
            </Link>
          </div>
          <div className="cart-page-column">
            <span className="price_text">Price</span>
          </div>
        </header>
        {filteredProducts.map((product) => {
          return (
            <CartProduct
              key={product._id}
              product={product}
              onCheckChange={handleCheckBox}
            />
          );
        })}
        <footer className="cart-footer">
          {cartProducts.length === 0 ? (
            <span className="subtotal">No items selected</span>
          ) : (
            <span className="subtotal">
              Subtotal ({totalQuantity} Items) :
              <span className="subtotal-price"> ${totalPrice} </span>
            </span>
          )}
        </footer>
      </div>
      <div className="cart-box checkout-box">
        <div>
          <div className="subtotal">Checkout for Products</div>
        </div>
        <Link to="/checkout" className="btn btn-tertiary btn-checkout">
          Checkout{" "}
        </Link>
      </div>
    </div>
  );
}

export default Cart;
