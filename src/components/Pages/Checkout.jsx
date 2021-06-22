import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";

class LoginPage extends Form {
  state = {
    data: {
      name: "",
      phone: undefined,
      address: "",
      city: "",
      zipCode: undefined,
    },
    errors: {},
  };

  componentDidMount() {
    const navbar = document.querySelector(".navbar");
    navbar.style.display = "none";
  }

  componentWillUnmount() {
    const navbar = document.querySelector(".navbar");
    navbar.style.display = "flex";
  }

  schema = {
    name: Joi.string().required().min(5).max(55).label("Name"),
    phone: Joi.number().required().min(10).label("Phone Number"),
    address: Joi.string().required().min(10).max(55).label("Address"),
    city: Joi.string().required().min(3).max(30).label("City"),
    zipCode: Joi.string().required().min(5).max(6).label("ZIP Code"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="checkout-page">
        <div>
          <div className="checkout-logo" />
          <form onSubmit={this.handleSubmit} className="checkout_box">
            <h1 className="form_heading">Sign-In</h1>
            {this.renderInput("name", "Full Name (First and Last name)")}
            {this.renderInput("phone", "Phone Number")}
            {this.renderInput("address", "Address")}
            {this.renderInput("city", "City")}
            {this.renderInput("zipCode", "ZIP Code")}
            {this.renderButton("Use this Address")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
