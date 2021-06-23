import React, { useContext, useState } from "react";
import ProductCard from "../common/ProductCard";
import { Products } from "../../services/fakeProductService";
import queryString from "query-string";

function SearchPage(props) {
  const [products] = useState(Products);

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
