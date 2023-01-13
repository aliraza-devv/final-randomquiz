import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authe } from "../firbase";
import InputControl from "./InputControl";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Please Fill all the fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(authe, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/startgame");
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
            Log in
            <span className="arrow-wrapper">
              <span className="arrow"></span>
            </span>
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
