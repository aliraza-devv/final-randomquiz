import React, { useState } from "react";
import { getDatabase, ref, set, child, get } from "firebase/database";

const Game = () => {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [result, setResult] = useState([
    {
      check: "",
      answer: "",
    },
  ]);

  const writeResultData = () => {
    const db = getDatabase();
    set(ref(db, "result/" + result.id), {
      result: result,
    });
  };

  const getData = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `result/${result.id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const displayData = () => {
    setIsShow((current) => !current);
  };

  const handleRetry = () => {
    setNum(0);
  };

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
    setResult([
      ...result,
      {
        check: "Right",
        answer: num,
      },
    ]);
  };

  const handleWrongScore = () => {
    setResult([
      ...result,
      {
        check: "Wrong",
        answer: num,
      },
    ]);
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
                {num * (1.7).toFixed()}
              </li>
              <li onClick={handleScore} className="list">
                {num}
              </li>
              <li onClick={handleWrongScore} className="list">
                {num * (1.6).toFixed()}
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
              <div className="d-flex">
                <button onClick={handleShow} className="btn-secondary">
                  <span className="btn-secondary__span">Result</span>
                </button>
                <button onClick={handleRetry} className="btn-secondary">
                  <span className="btn-secondary__span">Retry</span>
                </button>
              </div>
              {isShown && (
                <div>
                  <h2>{score} answers are correct</h2>
                  <div className="d-flex">
                    <div>
                      <button onClick={writeResultData} className="btn-primary">
                        Upload to Firebase
                        <span className="arrow-wrapper">
                          <span className="arrow"></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="marg">
                <button onClick={displayData} className="btn-primary">
                  Show Result
                  <span className="arrow-wrapper">
                    <span className="arrow"></span>
                  </span>
                </button>
                {isShow && (
                  <ul className="">
                    <li className="list-result bold">R/W Answer</li>
                    {result.map((res) => (
                      <li className="list-result" key={res.id}>
                        {res.check} {res.answer}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
