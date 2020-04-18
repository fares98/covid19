import React, { Fragment, useContext, useState } from "react";

import { QuestionsContext } from "../../context/questions";
import Nav from "../Navbar";
import TwoChoices from "../QuestionWithTwoChoices";
import MultiChoices from "../QuestionWithMultiChoices";
import NextButton from "../NextButton";
import Alert from "../Alert";

import questionsData from "./data";
import "./thirdQuestions.css";

const ThirdQuestions = () => {
  const { previousQuestions, handleThirdData } = useContext(QuestionsContext);
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

    length === 3 && handleThirdData(data);
    setAlert(true);
  };

  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <Fragment>
      {alert && <Alert closeAlert={closeAlert} />}
      <Nav handleBack={previousQuestions} />

      <div className="fourth-questions questionsBody">
        <h4>هل لديك أو لدى الشخص الذي ترعاه أي من الأعراض التالية:</h4>

        <TwoChoices
          question="هل هناك إرتفاع في الحرارة (38 درجة أو أكثر)  خلال الثلاثة أيام الماضية ؟"
          handleChange={handleChange}
          title={"fever"}
        />

        {questionsData.map((ele, index) => (
          <MultiChoices
            question={ele.question}
            handleChange={handleChange}
            title={ele.title}
            key={index}
          />
        ))}

        <NextButton handleNext={handleNext} />
      </div>
    </Fragment>
  );
};

export default ThirdQuestions;
