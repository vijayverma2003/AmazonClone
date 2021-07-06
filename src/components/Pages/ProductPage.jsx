import React, { useContext, useEffect, useState } from "react";
import {
  getProduct,
  saveProduct,
  updateProduct,
} from "../../services/productService";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import savings from "../../services/productPage";
import "../../styles/productsPage.css";

function ProductPage(props) {
  const [product, setProduct] = useState({});
  const { quantity, setQuantity } = useContext(CartContext);

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
    const updatedProduct = {
      _id: product._id,
      categoryId: product.category._id,
      title: product.title,
      stock: product.stock,
      label: product.label,
      description: product.description,
      price: product.price,
      listPrice: product.listPrice,
      quantityInCart: product.quantityInCart,
      savedForLater: product.savedForLater,
      imageUrl: product.imageUrl,
      inWishList: product.inWishList,
      by: product.by,
      tags: product.tags,
    };
    updatedProduct.quantityInCart++;
    setQuantity(quantity + 1);
    await updateProduct(updatedProduct);
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
        </div>
        <div className="product-description-list">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
