import React, { useState } from "react";
import ProductCard from "../common/ProductCard";
import { Products } from "../../services/fakeProductService";

function Computers(props) {
  const [products] = useState(Products);
  const filteredProducts = products.filter((product) => {
    return product.category._id === "c1";
  });

  return (
    <div className="body">
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

export default Computers;
