import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const SignUp = () => {
  // State for storing form data
  const [formData, setFormData] = useState({});

  // Function to handle successful Google login
  const handleGoogleLoginSuccess = async (googleUser) => {
    // Extract user profile information from Google user object
    const profile = googleUser.getBasicProfile();
    // Prepare data to send to the backend
    const googleData = {
      email: profile.getEmail(),
      username: profile.getEmail(), // Using email as username
      image: profile.getImageUrl(), // User's profile image URL
      googleId: profile.getId(), // Google ID
    };

    try {
      // Send a POST request to the backend API to sign up the user
      const response = await axios.post("/api/signup", googleData);
      console.log(response.data); // Log the response data
    } catch (error) {
      console.error("Error submitting Google signup form:", error); // Log any errors
    }
  };

  // Function to handle Google login failure
  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error); // Log the error message
  };

  // Log Google Client ID retrieved from environment variables
  console.log(
    "Google Client ID from backend:",
    process.env.REACT_APP_GOOGLE_ID
  );

  return (
    <div className="container my-5">
      <h2>Sign Up</h2>
      {/* Google Login component */}
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_ID} // Google Client ID
        onSuccess={handleGoogleLoginSuccess} // Success callback function
        onFailure={handleGoogleLoginFailure} // Failure callback function
        cookiePolicy={"single_host_origin"} // Cookie policy for login
        render={(renderProps) => (
          // Button to trigger Google login
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
