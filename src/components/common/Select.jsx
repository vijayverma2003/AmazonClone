import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div>
      <label className="form_label" htmlFor="form_input">
        {label}
      </label>
      <select name={name} id={name} {...rest} className="form_input">
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && (
        <div className="form-alert">
          <i className="alert-icon fas fa-exclamation "></i> {error}
        </div>
      )}
    </div>
  );
};

export default Select;
