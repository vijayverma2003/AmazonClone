import React from "react";
import { getProduct } from "../../services/fakeProductService";
import { Link } from "react-router-dom";

function ProductPage(props) {
  //   const productId = props.match.params.id;
  const product = getProduct(1);

  const savingsInDollars = product.listPrice - product.price;
  const saving =
    ((product.listPrice - product.price) * 100) / product.listPrice;
  const savingInPercentage = saving.toFixed(1);

  return (
    <div className="product-page-grid">
      <div>
        <img
          className="product-page-image"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className="product-page-description">
        <h1>{product.title}</h1>
        <div className="product-list-price">
          List Price: ${product.listPrice}
        </div>
        <span className="product-page-price-text">Price:</span>
        <span className="product-page-price">${product.price}</span>
        <div>
          <span className="savings-text">You Save: </span>
          <span className="product-savings">
            ${savingsInDollars} ({savingInPercentage}%)
          </span>
        </div>
        <Link to="/cart">
          <button
            onClick={() => console.log(product)}
            className="btn-secondary"
            disabled={product.stock > 0 ? false : true}
          >
            Add to Cart
          </button>
        </Link>
        <Link to="">
          <button
            onClick={() => console.log(product)}
            className="btn-tertiary"
            disabled={product.stock > 0 ? false : true}
          >
            Buy Now
          </button>
        </Link>
        <div className="product-description-list">
          <ul>
            {product.description.map((d) => {
              return <li key={d}>{d}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
