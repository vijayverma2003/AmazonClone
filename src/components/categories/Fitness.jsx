import React, { useState, useEffect } from "react";
import { Products } from "../../services/productService";
import ProductCard from "../common/ProductCard";

function Fitness(props) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await Products(props.match.params.id);
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.category.name === "Fitness";
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

export default Fitness;
