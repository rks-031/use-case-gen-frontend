import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleGoogleLoginSuccess = async (googleUser) => {
    const profile = googleUser.getBasicProfile();
    const googleData = {
      email: profile.getEmail(),
      username: profile.getEmail(),
      image: profile.getImageUrl(),
      googleId: profile.getId(),
    };

    try {
      const response = await axios.post("/api/signup", googleData);
      console.log(response.data);
      // Optionally, you can redirect the user to a different page after signup
      // window.location.href = "/redirect-page";
    } catch (error) {
      console.error("Error submitting Google signup form:", error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  console.log(
    "Google Client ID from backend:",
    process.env.REACT_APP_GOOGLE_ID
  );

  return (
    <div className="container my-5">
      <h2>Sign Up</h2>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_ID}
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            className="btn btn-primary"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign up with Google
          </button>
        )}
      />
    </div>
  );
};

export default SignUp;
