import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";
import BtnSecondary from "./BtnSecondary";
// import { authe } from "../firbase";

const StartGame = () => {
  const navigate = useNavigate();
//   const auth = getAuth();

 const logout = () => {
    navigate('/')
  }
  return (
    <>
      <div className="main-page">
        <Link to="game">
          <BtnSecondary title="Start Game" />
        </Link>
        <button className="btn-primary" onClick={logout}>
          Logout
          <span className="arrow-wrapper">
            <span className="arrow"></span>
          </span>
        </button>
      </div>
    </>
  );
};

export default StartGame;
