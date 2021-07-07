import React from "react";
import CartProduct from "./CartProduct";

function CartBody({ products, onCheckChange }) {
  return (
    <div>
      {products.map((cartProduct) => {
        return (
          <CartProduct
            key={cartProduct._id}
            cartProduct={cartProduct}
            onCheckChange={onCheckChange}
          />
        );
      })}
    </div>
  );
}

export default CartBody;
