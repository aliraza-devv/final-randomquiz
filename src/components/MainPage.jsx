import React from "react";
import BtnSecondary from "./BtnSecondary";
import { Link } from "react-router-dom";

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
        {/* <div className="main-page__start">{props.name ? "Hi" : "Login Please"}</div> */}
      </div>
    </>
  );
};

export default MainPage;
