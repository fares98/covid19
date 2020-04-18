import React, { useState, useContext, Fragment } from "react";

import { QuestionsContext } from "../../context/questions";
import Nav from "../Navbar";
import TwoChoices from "../QuestionWithTwoChoices";
import NextButton from "../NextButton";
import Alert from "../Alert";

import questionsData from "./data";

const SecondQuestions = () => {
  const { previousQuestions, handleSecondData } = useContext(QuestionsContext);
  const [alert, setAlert] = useState(false);
  const [data, setData] = useState({});
  const handleChange = (title, val) => {
    setData(() => {
      const newData = { ...data };
      newData[title] = val;
      return newData;
    });
  };

  const handleNext = () => {
    let length = 0;
    for (const key in data) {
      data.hasOwnProperty(key) && length++;
    }

    length === 4 && handleSecondData(data);
    setAlert(true);
  };

  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <Fragment>
      {alert && <Alert closeAlert={closeAlert} />}
      <Nav handleBack={previousQuestions} />
      <div className="questionsBody">
        {questionsData.map((ele, index) => (
          <TwoChoices
            question={ele.question}
            title={ele.title}
            key={index}
            handleChange={handleChange}
          />
        ))}
        <NextButton handleNext={handleNext} />
      </div>
    </Fragment>
  );
};

export default SecondQuestions;
