import React, { Component } from "react";
import ProductCard from "../common/ProductCard";
import { Products } from "../../services/productService";

class Computers extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data: products } = await Products();
    this.setState({ products: products });
  }

  render() {
    const filteredProducts = this.state.products.filter((product) => {
      return product.category.name === "Computers";
    });

    return (
      <div>
        {filteredProducts.map((product) => {
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
}

export default Computers;
