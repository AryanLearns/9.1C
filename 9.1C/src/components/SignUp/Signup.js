 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    confirmpass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass || !values.confirmpass) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (values.pass !== values.confirmpass) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setErrorMsg(""); // Clear any previous error messages.

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg("Invalid Email Domain.");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Create a DEV@Deakin Account</h1>

        <InputControl
          label="Name*"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email*"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password*"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <InputControl
          label="Confirm Password*"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, confirmpass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import InputControl from "../InputControl/InputControl";
// import { auth } from "../../firebase";
// import styles from "./Signup.module.css";

// function Signup() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     pass: "",
//     confirmpass: "",
//   });
//   const [isEmptyEmail, setIsEmptyEmail] = useState(false);
//   const [isEmptyName, setIsEmptyName] = useState(false);
//   const [isEmptyPass, setIsEmptyPass] = useState(false);
//   const [isEmptyConfirmPass, setIsEmptyConfirmPass] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.name || !values.email || !values.pass || !values.confirmpass) {
//       setErrorMsg("Please fill in all required fields.");

//       // Check if the email field is empty and set the flag
//       if (!values.email) {
//         setIsEmptyEmail(true);
//       } else {
//         setIsEmptyEmail(false);
//       }

//       return;
//     }

//     if (values.pass !== values.confirmpass) {
//       setErrorMsg("Password and Confirm Password do not match.");
//       return;
//     }

//     setErrorMsg(""); // Clear any previous error messages.

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.name,
//         });
//         navigate("/");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg("Invalid mail domain.");
//       });
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.innerBox}>
//         <h1 className={styles.heading}>Create a DEV@Deakin Account</h1>

//         <InputControl
//           label="Name*"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, name: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Email*"
//           id="email-input" // Add an ID to the email input element
//           className={isEmptyEmail ? styles.emptyInput : ""}
//           onChange={(event) => {
//             setValues((prev) => ({ ...prev, email: event.target.value }));
//             setIsEmptyEmail(!event.target.value);
//           }}
//         />
//         <InputControl
//           label="Password*"
//           type="password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, pass: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Confirm Password*"
//           type="password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, confirmpass: event.target.value }))
//           }
//         />

//         <div className={styles.footer}>
//           <b className={styles.error}>{errorMsg}</b>
//           <button onClick={handleSubmission} disabled={submitButtonDisabled}>
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import InputControl from "../InputControl/InputControl";
// import { auth } from "../../firebase";
// import styles from "./Signup.module.css";

// function Signup() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     pass: "",
//     confirmpass: "",
//   });
//   const [isEmptyName, setIsEmptyName] = useState(false);
//   const [isEmptyEmail, setIsEmptyEmail] = useState(false);
//   const [isEmptyPass, setIsEmptyPass] = useState(false);
//   const [isEmptyConfirmPass, setIsEmptyConfirmPass] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     // Reset all individual empty flags
//     setIsEmptyName(false);
//     setIsEmptyEmail(false);
//     setIsEmptyPass(false);
//     setIsEmptyConfirmPass(false);

//     // if (!values.name || !values.email || !values.pass || !values.confirmpass) {
//       if (!values.name) {
//         setNameError("Please enter your name.");
//       }
//       if (!values.email) {
//         setEmailError("Please enter your email.");
//       }
//       if (!values.pass) {
//         setPassError("Please enter your password.");
//       }
//       if (!values.confirmpass) {
//         setConfirmPassError("Please confirm your password.");
//       }
      
//     }

//     if (values.pass !== values.confirmpass) {
//       setErrorMsg("Password and Confirm Password do not match.");
//       return;
//     }

//     setErrorMsg(""); // Clear any previous error messages.

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.name,
//         });
//         navigate("/");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg("Error creating an account. Please try again later.");
//       });
//   }

 
//     <div className={styles.container}>
//       <div className={styles.innerBox}>
//         <h1 className={styles.heading}>Create a DEV@Deakin Account</h1>

//         <InputControl
//           label="Name*"
//           id="name-input"
//           className={isEmptyName ? styles.emptyInput : ""}
//           onChange={(event) => {
//             setValues((prev) => ({ ...prev, name: event.target.value }));
//             setIsEmptyName(!event.target.value);
//           }}
//         />
//         <InputControl
//           label="Email*"
//           id="email-input"
//           className={isEmptyEmail ? styles.emptyInput : ""}
//           onChange={(event) => {
//             setValues((prev) => ({ ...prev, email: event.target.value }));
//             setIsEmptyEmail(!event.target.value);
//           }}
//         />
//         <InputControl
//           label="Password*"
//           id="pass-input"
//           type="password"
//           className={isEmptyPass ? styles.emptyInput : ""}
//           onChange={(event) => {
//             setValues((prev) => ({ ...prev, pass: event.target.value }));
//             setIsEmptyPass(!event.target.value);
//           }}
//         />
//         <InputControl
//           label="Confirm Password*"
//           id="confirmpass-input"
//           type="password"
//           className={isEmptyConfirmPass ? styles.emptyInput : ""}
//           onChange={(event) => {
//             setValues((prev) => ({ ...prev, confirmpass: event.target.value }));
//             setIsEmptyConfirmPass(!event.target.value);
//           }}
//         />

//         <div className={styles.footer}>
//           <b className={styles.error}>{errorMsg}</b>
//           <button onClick={handleSubmission} disabled={submitButtonDisabled}>
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
