import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputControl from "./InputControl";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleSubmission = () => {
    console.log(values);
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
          <button className="btn-primary" onClick={handleSubmission}>
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
