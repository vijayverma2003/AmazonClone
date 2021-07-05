import Joi from "joi-browser";
import Form from "../common/Form";
import { getCategories } from "../../services/categoryService";
import { saveProduct } from "../../services/productService";

class AddProduct extends Form {
  state = {
    data: {
      title: "",
      label: "",
      description: "",
      price: 0,
      listPrice: 0,
      stock: 0,
      categoryId: "",
      by: "",
      imageUrl: "",
    },
    categories: [],
    errors: {},
  };
  schema = {
    by: Joi.string().required().min(3).max(30),
    categoryId: Joi.string().required(),
    description: Joi.string().min(50).max(4000).required(),
    imageUrl: Joi.string().min(10).max(1255).required(),
    label: Joi.string().required().min(5).max(100),
    listPrice: Joi.number(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
    title: Joi.string().required().min(5).max(255),
  };

  async populateCategories() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }
  // async populateProduct() {
  //   try {
  //     // const productId = this.props.match.params.id;
  //     // if (productId === "new") return;
  //     // const { data: product } = await getproduct(productId);
  //     // this.setState({ data: this.mapToViewModel(product) });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       return this.props.history.replace("/not-found");
  //   }
  // }

  async componentDidMount() {
    await this.populateCategories();
    // await this.populateProduct();
  }

  doSubmit = async () => {
    const { data } = await saveProduct(this.state.data);

    this.props.history.push("/product/" + data._id);
  };

  render() {
    console.log(this.state.categories);
    return (
      <div className="checkout-page">
        <div>
          <div className="checkout-logo" />
          <form onSubmit={this.handleSubmit} className="checkout_box">
            <h1 className="form_heading">Add Product</h1>
            {this.renderInput("title", "Title")}
            {this.renderInput("label", "Label")}
            {this.renderSelect("categoryId", "Category", this.state.categories)}
            {this.renderInput("imageUrl", "Image URL")}
            {this.renderInput("stock", "Stock")}
            {this.renderInput("price", "Price")}
            {this.renderInput("listPrice", "List Price")}
            {this.renderInput("price", "Price")}
            {this.renderInput("description", "Description")}
            {this.renderInput("by", "By")}
            {this.renderButton("Save")}
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
