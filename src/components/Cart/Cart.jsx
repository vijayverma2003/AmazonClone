import React, { useContext, useEffect, useState } from "react";

import "../../styles/cartPage.css";

import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";
import { getCartProducts } from "../../services/cartService";
import { getCurrentUser } from "../../services/authService";

function Cart() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  let totalPrice = 0;
  let totalQuantity = 0;

  const fetchData = async () => {
    const { data: products } = await getCartProducts();
    const filteredProducts = products.filter(
      (p) => p.user._id === getCurrentUser()._id
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  cartProducts.map((cartProduct) => {
    totalPrice += cartProduct.product.price * cartProduct.quantity;
    return totalPrice;
  });

  cartProducts.map((product) => {
    totalQuantity += product.quantity;
    return totalQuantity;
  });

  if (products.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart">
      <div className="cart-box">
        <CartHeader />
        <CartBody products={products} onCheckChange={handleCheckBox} />
        <CartFooter
          cartProducts={cartProducts}
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
        />
      </div>
    </div>
  );
}

export default Cart;
