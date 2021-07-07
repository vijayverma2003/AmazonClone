import React from "react";

function UserNavbar({ name }) {
  return (
    <div className="user-box">
      <div className="user-hello">Hello, {name}</div>
      <div className="user-details">
        Your account<i className="fas fa-chevron-down user-chevron"></i>
      </div>
    </div>
  );
}

export default UserNavbar;
