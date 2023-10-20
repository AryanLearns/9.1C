// // Login.jsx

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import InputControl from "../InputControl/InputControl";
// import { auth } from "../../firebase";
// import styles from "./Loginmodule.css";

// function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Please fill in all required fields.");
//       return;
//     }
//     setErrorMsg(""); // Clear any previous error messages.

//     setSubmitButtonDisabled(true);
//     signInWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         alert("Login successful"); // Display a success alert
//         navigate("/signout"); // Redirect to the signout page after login
//       })
//       .catch(() => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg("Invalid email or password. Please try again."); // Custom error message
//       });
//   }

//   return (
//     <div className="container">
//       <div className="innerBox">
//         <p className="signupbtn">
//           <Link to="/signup">Sign up</Link>
//         </p>
//         <InputControl
//           label="Your email"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, email: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Your password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, pass: event.target.value }))
//           }
//         />
//         <div className="footer">
//           <b className="error">{errorMsg}</b>
//           <button disabled={submitButtonDisabled} onClick={handleSubmission}>
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Loginmodule.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Please fill in all required fields.");

      // Add the error class to the input elements
      if (!values.email) {
        document.getElementById("email-input").classList.add("error-input");
      } else {
        document.getElementById("email-input").classList.remove("error-input");
      }

      if (!values.pass) {
        document.getElementById("pass-input").classList.add("error-input");
      } else {
        document.getElementById("pass-input").classList.remove("error-input");
      }

      return;
    }
    setErrorMsg(""); // Clear any previous error messages.

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        alert("Login successful"); // Display a success alert
        navigate("/signout"); // Redirect to the signout page after login
      })
      .catch(() => {
        setSubmitButtonDisabled(false);
        setErrorMsg("Invalid email or password. Please try again."); // Custom error message
      });
  }

  return (
    <div className="container">
      <div className="innerBox">
        <p className="signupbtn">
          <Link to="/signup">Sign up</Link>
        </p>
        <InputControl
          label="Your email"
          id="email-input" // Add an ID to the input element
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Your password"
          id="pass-input" // Add an ID to the input element
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className="footer">
          <b className="error">{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

