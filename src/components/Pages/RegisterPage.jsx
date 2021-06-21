import React from "react";
import Joi from "joi-browser";
import Input from "../common/Input";
import Form from "../common/Form";

class RegisterPage extends Form {
  state = {
    data: { name: "", email: "", password: "" },
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
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Registered");
  };

  render() {
    const { errors, data } = this.state;
    return (
      <div className="form-page">
        <div>
          <div className="form_logo" />
          <form onSubmit={this.handleSubmit} className="form_box">
            <h1 className="form_heading">Create Account</h1>
            {this.renderInput("name", "Name")}
            {this.renderInput("email", "Email Address")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Create your Amazon Account")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
