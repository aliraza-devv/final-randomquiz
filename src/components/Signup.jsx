import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "./InputControl";
import { authe } from "../firbase";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please Fill all the fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(authe, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate('/startgame')
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="container">
      <div className="container-box">
        <h1 className="heading-light">Log in</h1>
        <InputControl
          label="Name"
          placeholder="Enter your Full Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter your Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter your Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className="form-footer">
          <b className="error-message">{errorMsg}</b>
          <button
            className="btn-primary"
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
          >
            Sign Up
            <span className="arrow-wrapper">
              <span className="arrow"></span>
            </span>
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Log In</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
