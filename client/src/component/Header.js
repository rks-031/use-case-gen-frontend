import React, { useContext } from "react";
import logo from "../icons/beckn-logo.svg";
import { Context } from "../Store";

const Header = () => {
  const [state, setState] = useContext(Context);

  const handleLogout = () => {
    setState({ userInfo: {} });
  };

  return (
    <div className="header">
      <img className="b-logo" src={logo} alt="React Logo" />
      {state.userInfo.googleId ? (
        <img
          className="profile-icon"
          src={state.userInfo.image}
          alt="Profile Icon"
        />
      ) : (
        <div>
          <button className="ml-auto mx-2 rounded">
            <a href="/login">Login</a>
          </button>
          <button className="rounded">
            <a href="/signup">SignUp</a>
          </button>
        </div>
      )}
      {state.userInfo.googleId && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Header;
