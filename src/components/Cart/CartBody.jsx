import React from "react";
import CartProduct from "./CartProduct";

function CartBody({ products, onCheckChange }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <CartProduct
            key={product._id}
            product={product}
            onCheckChange={onCheckChange}
          />
        );
      })}
    </div>
  );
}

export default CartBody;
