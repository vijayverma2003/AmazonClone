import React, { useContext, useEffect, useState } from "react";
import { getProduct, updateProduct } from "../../services/productService";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import savings from "../../services/productPage";
import "../../styles/productsPage.css";
import UserContext from "../../context/UserContext";
import { updateCartProduct, saveCartProduct } from "../../services/cartService";

function ProductPage(props) {
  const [product, setProduct] = useState({});
  const { quantity, setQuantity } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const fetchData = async () => {
    const { data } = await getProduct(props.match.params.id);
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const savingsInDollars = savings.savingInDollars(product);
  const saving = savings.saving(product);
  const savingInPercentage = savings.savingInPercentage(saving);

  const handleAdd = async (product) => {
    if (!user) window.location = "/login";

    const updatedCartProduct = {
      productId: product._id,
      userId: user._id,
    };

    await updateCartProduct(updatedCartProduct);

    window.location = "/cart";
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
        {product.listPrice !== 0 && (
          <div className="product-list-price">
            List Price: ${product.listPrice}
          </div>
        )}
        <span className="product-page-price-text">Price:</span>
        <span className="product-page-price">${product.price}</span>
        {product.listPrice !== 0 && (
          <div>
            <span className="savings-text">You Save: </span>
            <span className="product-savings">
              ${savingsInDollars} ({savingInPercentage}%)
            </span>
          </div>
        )}
        {product.stock === 0 ? (
          <div className="product-savings">Out of Stock</div>
        ) : null}
        <div>
          <button
            onClick={() => handleAdd(product)}
            className="btn-secondary"
            disabled={product.stock > 0 ? false : true}
          >
            Add to Cart
          </button>
          <Link to={user ? "/checkout" : "/login"}>
            <button
              onClick={() => console.log(product)}
              className="btn-tertiary"
              disabled={product.stock > 0 ? false : true}
            >
              Buy Now
            </button>
          </Link>
        </div>
        <div className="product-description-list">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
