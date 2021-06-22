import React, { useContext } from "react";
import { getProduct } from "../../services/fakeProductService";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import savings from "../../services/productPage";
import "../../styles/productsPage.css";

function ProductPage(props) {
  const productId = props.match.params.id;
  const product = getProduct(productId);
  const { quantity, setQuantity } = useContext(CartContext);

  const savingsInDollars = savings.savingInDollars(product);
  const saving = savings.saving(product);
  const savingInPercentage = savings.savingInPercentage(saving);

  const handleAdd = (product) => {
    product.quantityInCart++;
    setQuantity(quantity + 1);
  };

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
        {product.stock === 0 ? (
          <div className="product-savings">Out of Stock</div>
        ) : null}
        <Link to="/cart">
          <button
            onClick={() => handleAdd(product)}
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
