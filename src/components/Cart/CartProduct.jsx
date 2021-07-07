import React from "react";
import { Link } from "react-router-dom";

function CartProduct({ cartProduct, onCheckChange }) {
  const totalPrice = cartProduct.quantity * cartProduct.product.price;
  return (
    <div key={cartProduct._id} className="cart-grid cart-grid-1x2">
      <input
        onClick={() => onCheckChange(cartProduct)}
        type="checkbox"
        name="cart_item"
        id={cartProduct._id}
      />
      <label htmlFor="cart_item">
        <div className="cart-grid cart-grid-1x3">
          <img
            src={cartProduct.product.imageUrl}
            alt=""
            className="cart_item-image"
          />
          <div className="cart_body">
            <Link
              to={`/product/${cartProduct.product._id}`}
              className="cart_item-title"
            >
              <div className="text-container">{cartProduct.product.title}</div>
            </Link>
            {cartProduct.stock === 0 ? (
              <div className="cart_stock-out">Out of Stock</div>
            ) : (
              <div className="cart_stock">In Stock</div>
            )}
            <div className="quantity">Quantity: {cartProduct.quantity}</div>
          </div>
          <div className="cart-price">${totalPrice.toFixed(2)}</div>
        </div>
      </label>
    </div>
  );
}

export default CartProduct;
