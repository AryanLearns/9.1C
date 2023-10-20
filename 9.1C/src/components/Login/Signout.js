import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./Signout.css"; // Import your CSS file for styling

function Signout() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      alert("Sign-out successful"); // Display a success alert

      // You can display a welcome message here before redirecting, e.g., "Goodbye! You have been signed out."
      navigate("/", { replace: true }); // Redirect to the home page and replace the history entry
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="welcome-message">You are now logged in! Click the signout button to logout from your account.</h1>
        <button onClick={handleSignOut} className="sign-out-button">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Signout;
