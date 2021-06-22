import React from "react";
import { Link } from "react-router-dom";
import "../../styles/productCard.css";

function ProductCard({ title, price, listPrice, stock, imageUrl, id }) {
  return (
    <div className="product-card grid-product-card">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-card-body fontsize-4">
        <Link className="product-card-title" to={`/product/${id}`}>
          {title}
        </Link>
        <div className="price">
          <Link to={`/product/${id}`} className="product-price">
            ${price}
          </Link>
          <span className="product-list-price">${listPrice}</span>
        </div>
        {stock === 0 ? (
          <div className="out-of-stock">Out of Stock</div>
        ) : (
          <div />
        )}

        {stock > 0 && stock <= 10 ? (
          <div className="out-of-stock">
            Only {stock} left in stock - Order soon.
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
