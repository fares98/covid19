import React, { useState } from "react";

import "./twoChoices.css";

const TwoChoices = ({ question, handleChange, title }) => {
  const [active, setActive] = useState("");

  return (
    <div className="twoChoices">
      <p className="twoChoices__text">{question}</p>

      <button
        className={
          active === "yes" ? "twoChoices__yes active" : "twoChoices__yes"
        }
        onClick={() => {
          setActive("yes");
          handleChange(title, "yes");
        }}
      >
        نعم
      </button>

      <button
        className={active === "no" ? "twoChoices__no active" : "twoChoices__no"}
        onClick={() => {
          setActive("no");
          handleChange(title, "no");
        }}
      >
        لا
      </button>
    </div>
  );
};

export default TwoChoices;
