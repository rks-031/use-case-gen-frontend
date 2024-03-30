import React, { useContext, useEffect, useState } from "react";
import logo from "../icons/beckn-logo.svg";
import { Context } from "../Store";
import axios from "axios";

const Header = () => {
  const [state, setState] = useContext(Context);
  const [userData, setUserData] = useState({}); // State to store user data

  const handleLogout = () => {
    setState({ userInfo: {} });
  };

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/user", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img className="b-logo" src={logo} alt="React Logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {state.userInfo.googleId ? (
            <li className="nav-item">
              <img
                className="profile-icon rounded-circle"
                src={state.userInfo.image}
                alt="Profile Icon"
                style={{ width: "32px", height: "32px" }} // Custom CSS for smaller size
              />
            </li>
          ) : (
            <li className="nav-item">
              <button className="btn  btn-secondary mr-2">
                <a
                  href="http://localhost:5000/logout"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Logout
                </a>
              </button>
              <button className="btn  btn-secondary">
                <a
                  href="http://localhost:5000/auth/google"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sign in
                </a>
              </button>
              <img
                className="profile-icon rounded-circle ml-2"
                src={userData.profileImage}
                alt={userData.username}
                style={{ width: "32px", height: "32px" }} // Custom CSS for smaller size
              />
            </li>
          )}
          {state.userInfo.googleId && (
            <li className="nav-item">
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
