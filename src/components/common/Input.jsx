import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

function Input({ label, name, error, ...rest }) {
  return (
    <div>
      <label className="form_label" htmlFor="form_input">
        {label}
      </label>
      <input id={name} name={name} {...rest} className="form_input" />
      {error && (
        <div className="form-alert">
          <i className="alert-icon fas fa-exclamation "></i> {error}
        </div>
      )}
    </div>
  );
}

export default Input;
