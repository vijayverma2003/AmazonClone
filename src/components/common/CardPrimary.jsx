import React from "react";
import { Link } from "react-router-dom";

function CardPrimary({ title, imageUrl, text, categoryId }) {
  return (
    <div className="card">
      <header className="card-header-primary">
        <h2 className="bolder">{title}</h2>
      </header>
      <div className="card-body-primary">
        <img src={imageUrl} alt={title} />
      </div>
      <footer>
        <Link className="btn btn-link" to={`/category/${categoryId}`}>
          {text}
        </Link>
      </footer>
    </div>
  );
}

export default CardPrimary;
