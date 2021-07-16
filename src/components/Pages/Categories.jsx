import React, { useState, useEffect } from "react";
import { Products } from "../../services/productService";
import ProductCard from "../common/ProductCard";

function Categories(props) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await Products();

    const filteredProducts = data.filter((product) => {
      return product.category._id === props.match.params.id;
    });
    setProducts(filteredProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => {
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
