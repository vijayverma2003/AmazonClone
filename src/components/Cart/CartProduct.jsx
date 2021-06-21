import React from "react";
import { Link } from "react-router-dom";

function CartProduct({ product, onCheckChange }) {
  return (
    <div key={product._id} className="cart-grid cart-grid-1x2">
      <input
        onClick={() => onCheckChange(product)}
        type="checkbox"
        name="cart_item"
        id={product._id}
      />
      <label htmlFor="cart_item">
        <div className="cart-grid cart-grid-1x3">
          <img src={product.imageUrl} alt="" className="cart_item-image" />
          <div className="cart_body">
            <Link to={`/product/${product._id}`} className="cart_item-title">
              <div className="text-container">{product.title}</div>
            </Link>
            {product.stock === 0 ? (
              <div className="cart_stock-out">Out of Stock</div>
            ) : (
              <div className="cart_stock">In Stock</div>
            )}
            <div className="quantity">Quantity: {product.quantityInCart}</div>
          </div>
          <div className="cart-price">${product.price}</div>
        </div>
      </label>
    </div>
  );
}

export default CartProduct;
