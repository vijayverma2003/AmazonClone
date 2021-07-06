import React, { useContext, useEffect, useState } from "react";

import "../../styles/cartPage.css";

import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";
import { Products } from "../../services/productService";
import CartContext from "../../context/CartContext";

function Cart() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  let filteredProducts = products.filter((p) => p.quantityInCart > 0);
  let totalPrice = 0;
  let totalQuantity = 0;

  const fetchData = async () => {
    const { data } = await Products();
    setProducts(data);
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

  cartProducts.map((product) => {
    totalPrice += product.price * product.quantityInCart;
    return totalPrice;
  });

  cartProducts.map((product) => {
    totalQuantity += product.quantityInCart;
    return totalQuantity;
  });

  if (filteredProducts.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart">
      <div className="cart-box">
        <CartHeader />
        <CartBody products={filteredProducts} onCheckChange={handleCheckBox} />
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
