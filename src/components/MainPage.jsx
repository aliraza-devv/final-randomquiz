import React from "react";
import { Link } from "react-router-dom";
import BtnSecondary from "./BtnSecondary";

const MainPage = (props) => {
  return (
    <>
      <div className="main-page">
        <Link to="login">
          <BtnSecondary title="Log in" />
        </Link>
        <Link to="signup">
          <BtnSecondary title="Sign up" />
        </Link>
      </div>
    </>
  );
};

export default MainPage;
