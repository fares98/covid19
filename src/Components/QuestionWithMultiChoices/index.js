import React, { useState } from "react";

import "./multiChoices.css";
const MultiChoices = ({ handleChange, question, title }) => {
  const [active, setActive] = useState("");

  return (
    <section className="multi-choices">
      <p>{question}</p>

      <form className="multi-choices__form">
        <label
          onClick={() => {
            setActive("much");
            handleChange(title, "much");
          }}
          className={active === "much" ? "multi-choices--active" : ""}
        >
          نعم، بشكل متكرر ومزعج
          <input type="radio" name={title} />
          <span></span>
        </label>

        <label
          onClick={() => {
            setActive("slightly");
            handleChange(title, "slightly");
          }}
          className={active === "slightly" ? "multi-choices--active" : ""}
        >
          نعم، بشكل طفيف
          <input type="radio" name={title} />
          <span></span>
        </label>

        <label
          onClick={() => {
            setActive("no");
            handleChange(title, "no");
          }}
          className={active === "no" ? "multi-choices--active" : ""}
        >
          لا
          <input type="radio" name={title} />
          <span></span>
        </label>
      </form>
    </section>
  );
};

export default MultiChoices;
