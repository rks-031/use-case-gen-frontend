import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { REACT_APP_GOOGLE_ID } from "../env";
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
    } catch (error) {
      console.error("Error submitting Google signup form:", error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  console.log("Google Client ID from backend:", REACT_APP_GOOGLE_ID);

  return (
    <div className="container my-5">
      <button type="button" class="btn btn-info">
        <a href="http://localhost:5000/auth/google" className="text-white">
          Sign Up
        </a>
      </button>
    </div>
  );
};

export default SignUp;
