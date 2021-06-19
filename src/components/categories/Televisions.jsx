import React, { useState } from "react";
import { Products } from "../../services/fakeProductService";
import ProductCard from "../common/ProductCard";

function Televisions(props) {
  const [products] = useState(Products);
  const filteredProducts = products.filter((product) => {
    return product.category._id === "c8";
  });
  return (
    <div>
      {filteredProducts.map((product) => {
        return (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            listPrice={product.listPrice}
            stock={product.stock}
          />
        );
      })}
    </div>
  );
}

export default Televisions;
