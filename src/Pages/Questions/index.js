import React, { useState, useEffect } from "react";
import { createBrowserHistory } from "history";

import QuestionsProvider from "../../context/questions";
import FirstQuestions from "../../Components/FirstQuestions";
import SecondQuestions from "../../Components/SecondQuestions";
import ThirdQuestions from "../../Components/ThirdQuestions";
import FourthQuestions from "../../Components/FourthQuestions";

import "./question.css";

const Questions = () => {
  const [current, setCurrent] = useState(1);
  const nextQuestions = () => {
    setCurrent(current + 1);
  };

  const previousQuestions = () => {
    setCurrent(current - 1);
  };

  const [firstData, setFirstData] = useState({});
  const handleFirstData = (newData) => {
    setFirstData(newData);
    nextQuestions();
  };

  const [secondData, setSecondData] = useState({});
  const handleSecondData = (newData) => {
    setSecondData(newData);
    nextQuestions();
  };

  const [thirdData, setThirdData] = useState({});
  const handleThirdData = (newData) => {
    setThirdData(newData);
    nextQuestions();
  };

  const [allData, setAllData] = useState({});
  const handleDone = (newData) => {
    setAllData({
      personalInfo: firstData,
      general: secondData,
      common: thirdData,
      lessCommon: newData,
    });
  };

  useEffect(() => {
    allData.lessCommon &&
      (() => {
        localStorage.setItem("allData", JSON.stringify(allData));
        createBrowserHistory().push("/result");
        window.location.reload();
      })();
  });

  return (
    <QuestionsProvider
      value={{
        nextQuestions,
        previousQuestions,
        handleFirstData,
        handleSecondData,
        handleThirdData,
        handleDone,
      }}
    >
      <section className="allQuestions">
        {current === 1 && <FirstQuestions />}
        {current === 2 && <SecondQuestions />}
        {current === 3 && <ThirdQuestions />}
        {current === 4 && <FourthQuestions />}
      </section>
    </QuestionsProvider>
  );
};

export default Questions;
