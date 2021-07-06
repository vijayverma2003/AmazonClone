import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import "../../styles/forms.css";
import { register } from "../../services/userService";

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

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      const jwt = response.headers["x-auth-token"];
      localStorage.setItem("token", jwt);
      this.props.history.replace("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
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
