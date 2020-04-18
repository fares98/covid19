import React, { Fragment, useContext, useState } from "react";

import { QuestionsContext } from "../../context/questions";
import Nav from "../Navbar";
import TwoChoices from "../QuestionWithTwoChoices";
import Alert from "../Alert";

import questionsData from "./data";
import "./fourthQuestions.css";

const FourtQuestions = () => {
  const { previousQuestions, handleDone } = useContext(QuestionsContext);
  const [alert, setAlert] = useState(false);

  const [data, setData] = useState({});
  const handleChange = (title, val) => {
    setData(() => {
      const newData = { ...data };
      newData[title] = val;
      return newData;
    });
  };

  const getResult = () => {
    let length = 0;

    for (const key in data) {
      data.hasOwnProperty(key) && length++;
    }

    length === 5 ? handleDone(data) : setAlert(true);
  };

  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <Fragment>
      {alert && <Alert closeAlert={closeAlert} />}
      <Nav handleBack={previousQuestions} />

      <section className="questionsBody">
        {questionsData.map((ele, index) => (
          <TwoChoices
            question={ele.question}
            title={ele.title}
            key={index}
            handleChange={handleChange}
          />
        ))}

        <button className="done-button" onClick={getResult}>
          تم
        </button>
      </section>
    </Fragment>
  );
};

export default FourtQuestions;
