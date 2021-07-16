import Joi from "joi-browser";
import Form from "../common/Form";
import { getCategories } from "../../services/categoryService";
import { saveProduct } from "../../services/productService";
import "../../styles/checkout.css";
import "../../styles/forms.css";

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
    by: Joi.string().required().min(3).max(30).label("Brand"),
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

  async componentDidMount() {
    await this.populateCategories();
  }

  doSubmit = async () => {
    const { data } = await saveProduct(this.state.data);

    this.props.history.push("/product/" + data._id);
  };

  render() {
    return (
      <div className="checkout-page">
        <div>
          <form onSubmit={this.handleSubmit} className="add_box">
            <h1 className="form_heading">Add Product</h1>
            {this.renderInput("title", "Title")}
            {this.renderInput("label", "Label")}
            {this.renderInput("price", "Price")}
            {this.renderInput("listPrice", "List Price (If any)")}
            {this.renderSelect("categoryId", "Category", this.state.categories)}
            {this.renderInput("imageUrl", "Image URL")}
            {this.renderInput("stock", "Stock")}
            {this.renderInput("description", "Description")}
            {this.renderInput("by", "Brand")}
            {this.renderButton("Save", "form_button form_button-small")}
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
