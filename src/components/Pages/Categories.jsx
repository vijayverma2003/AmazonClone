import React, { useState, useEffect } from "react";
import { Products } from "../../services/productService";
import ProductCard from "../common/ProductCard";

function Categories(props) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await Products();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.category._id === props.match.params.id;
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

export default Categories;
