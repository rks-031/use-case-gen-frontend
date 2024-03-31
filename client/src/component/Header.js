import React, { useContext, useEffect, useState } from "react";
import logo from "../icons/beckn-logo.svg";
import { Context } from "../Store";
import axios from "axios";

const Header = () => {
  const [state, setState] = useContext(Context);
  const [userData, setUserData] = useState({}); // State to store user data
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleLogout = () => {
    setState({ userInfo: {} });
    setLoggedIn(false); // Update login status on logout
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
          setLoggedIn(true); // Update login status on successful authentication
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
          {loggedIn ? (
            <React.Fragment>
              <li className="nav-item">
                <button className="btn btn-secondary" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              <li className="nav-item">
                <img
                  className="profile-icon rounded-circle mx-2"
                  src={userData.profileImage}
                  alt={userData.username}
                  style={{ width: "35px", height: "35px" }} // Custom CSS for smaller size
                />
              </li>
            </React.Fragment>
          ) : (
            <li className="nav-item">
              <React.Fragment>
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
                    Login
                  </a>
                </button>
              </React.Fragment>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
