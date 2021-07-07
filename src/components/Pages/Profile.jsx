import React, { useContext } from "react";
import authService from "../../services/authService";
import "../../styles/profile.css";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Profile(props) {
  const handleLogout = () => {
    authService.logout();
  };
  return (
    <div className="profile">
      <div className="profile-heading">Your Account</div>
      <div className="profile-hello">
        Hello, {authService.getCurrentUser().name}
      </div>
      <button onClick={handleLogout} className="btn btn-tertiary btn-small">
        Logout
      </button>
      <button className="btn btn-secondary btn-small">Orders</button>
    </div>
  );
}

export default Profile;
