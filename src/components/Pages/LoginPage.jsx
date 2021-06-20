import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";

class LoginPage extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  componentDidMount() {
    const navbar = document.querySelector(".navbar");
    navbar.style.display = "none";
  }

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="form-page">
        <div>
          <div className="form_logo" />
          <form onSubmit={this.handleSubmit} className="form_box">
            <h1 className="form_heading">Sign-In</h1>
            {this.renderInput("email", "Email Address")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Sign In")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
