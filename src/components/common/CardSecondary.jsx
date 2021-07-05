import React from "react";
import { Link } from "react-router-dom";

function CardSecondary({ title, to, text, imageUrl }) {
  return (
    <div>
      <div className="card">
        <header>
          <h2 className="bolder">{title}</h2>
        </header>
        <div className="card-body-primary">
          <Link to={to} className="btn btn-primary">
            {text}
          </Link>
        </div>
      </div>
      <img className="photo-shipping" src={imageUrl} alt="Image" />
    </div>
  );
}

export default CardSecondary;
