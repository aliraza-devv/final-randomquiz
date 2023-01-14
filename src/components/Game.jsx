import React, { useState } from "react";
import BtnSecondary from "./BtnSecondary";

const Game = () => {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState({
    check: "",
    answer: "",
  });
  const [isShown, setIsShown] = useState(false);

  const handleShow = () => {
    setIsShown((current) => !current);
  };

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(100, 200));
  };

  const handleScore = () => {
    setScore(score + 1);
    setResult({
      check: "Right",
      answer: num,
    });
  };

  const handleWrongScore = () => {
    setResult({
      check: "Wrong",
      answer: num,
    });
  };

  return (
    <>
      <div className="game-container">
        <div className="game-container__inner">
        <div>
          <button onClick={handleClick} className="btn-secondary">
            <span className="btn-secondary__span">Generate</span>
          </button>
        </div>
        <div className="list-container">
          <h3>Options are:</h3>
          <ul className="lists">
            <li onClick={handleWrongScore} className="list">
            {num*1.7.toFixed()}
            </li>
            <li onClick={handleScore} className="list">
              {num}
            </li>
            <li onClick={handleWrongScore} className="list">
            {num*1.6.toFixed()}
            </li>
          </ul>
          <div className="next-container">
            <button className="btn-primary" onClick={handleClick}>
              Next
              <span className="arrow-wrapper">
                <span className="arrow"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="inner-container">
          <div className="inner-container__box">
            <button onClick={handleShow} className="btn-secondary">
              <span className="btn-secondary__span">Result</span>
            </button>
            {isShown && (
              <div>
                <h2>{score} answers are correct</h2>
                <div>
                  <button className="btn-primary">
                    Upload to Firebase
                    <span className="arrow-wrapper">
                      <span className="arrow"></span>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Game;
