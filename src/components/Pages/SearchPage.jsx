import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import { Products } from "../../services/productService";
import queryString from "query-string";

function SearchPage(props) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await Products();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  const query = queryString.parse(props.location.search);
  const queryList = query.searchQuery
    .toLowerCase()
    .split(" ")
    .filter((q) => {
      return q.trim() !== "";
    });

  console.log(queryList);

  const p = products.filter((p) => {
    for (let key in queryList) {
      return p.tags.includes(queryList[key]);
    }
  });

  console.log(p);

  return (
    <div>
      {p.map((product) => {
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

export default SearchPage;
