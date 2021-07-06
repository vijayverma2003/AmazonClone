import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import "../../styles/forms.css";
import authService, { login } from "../../services/authService";
import { Redirect } from "react-router";

class LoginPage extends Form {
  state = {
    data: { email: "", password: "" },
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
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(8).label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await login(data.email, data.password);

      const { state } = this.props.location;

      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (authService.getCurrentUser()) return <Redirect to="/" />;
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
