import React from "react";

import "./nextButton.css";

const NextButton = ({ handleNext }) => {
  return (
    <button className="next-button" onClick={handleNext}>
      التالي
    </button>
  );
};

export default NextButton;
