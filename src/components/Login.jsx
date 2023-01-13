import React from "react";
import { Link } from "react-router-dom";
import InputControl from "./InputControl";

const Login = () => {
  return (
    <div className="container">
      <div className="container-box">
        <h1 className="heading-light">Log in</h1>
        <InputControl label="Email" placeholder="Enter your Email" />
        <InputControl label="Password" placeholder="Enter your Password" />

        <div className="form-footer">
        <button className="btn-primary">
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
