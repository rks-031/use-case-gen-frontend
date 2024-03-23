import React, { useContext } from "react";
import logo from "../icons/beckn-logo.svg";
import { Context } from "../Store";

export default function Header() {
  const [state, setState] = useContext(Context);

  const handleLogout = () => {
    // Implement your logout logic here
    setState({ userInfo: {} });
  };

  return (
    <div className="header">
      <img className="b-logo" src={logo} alt="React Logo" />
      {/*<div className="user-details">
        {state.userInfo.user && (
          <div className="b-padding">
            Name: <b>{state.userInfo.user}</b>
          </div>
        )}
        {state.userInfo.name_org && (
          <div className="b-padding">
            Organisation Name: <b>{state.userInfo.name_org}</b>
          </div>
        )}
        {state.userInfo.name_role_timestamp && (
          <div>
            Role in the network: <b>{state.userInfo.name_role_timestamp}</b>
          </div>
        )}
        {state.userInfo.user && <button onClick={handleLogout}>Logout</button>}
        </div>*/}
      <button className="ml-auto mx-2 rounded">
        <a href="/login">Login</a>
      </button>
      <button className="rounded">
        <a href="/signup">SignUp</a>
      </button>
    </div>
  );
}
