import React from "react";
import { Link } from "react-router-dom";

function CardTertiary({ featuredList, title, className }) {
  return (
    <div className={className ? `card ${className}` : "card"}>
      <header>
        <h2 className="bolder">{title}</h2>
      </header>
      <div className="small-card-body-primary">
        <div className="grid grid-2x2">
          {featuredList.map((category) => (
            <div key={category.imageUrl}>
              <img
                className={
                  category.className ? category.className : "small-image"
                }
                src={category.imageUrl}
                alt=""
              />
              <div className="link-container">
                <Link
                  className="btn btn-link"
                  to={`/category/${category.categoryId}`}
                >
                  {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <Link className="btn btn-link" to="/category">
          See More
        </Link>
      </footer>
    </div>
  );
}

export default CardTertiary;
