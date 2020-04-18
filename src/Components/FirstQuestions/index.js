import React, { useState, Fragment, useContext } from "react";
import { createBrowserHistory } from "history";

import { QuestionsContext } from "../../context/questions";
import Nav from "../Navbar";
import NextButton from "../NextButton";
import data from "./dataSecondQuestion";
import Alert from "../Alert";

import "./firstQuestion.css";

const First = () => {
  const { handleFirstData } = useContext(QuestionsContext);
  const [person, setPerson] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [alert, setAlert] = useState(false);

  const myself = () => {
    setPerson("myself");
  };

  const anotherPerson = () => {
    setPerson("anotherPerson");
  };

  const maleGender = () => {
    setGender("male");
  };

  const femaleGender = () => {
    setGender("female");
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleNext = () => {
    person && age && gender && handleFirstData({ person, age, gender });
    setAlert(true);
  };

  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <Fragment>
      {alert && <Alert closeAlert={closeAlert} />}
      <Nav
        handleBack={() => {
          createBrowserHistory().goBack();
        }}
      />

      <section className="first-questions questionsBody">
        <h4>
          يرجى التكرم بالإجابة على الأسئلة التالية حتى يتم تحديد الخدمة الصحية
          المناسبة:
        </h4>

        <div className="first-questions__one-question">
          <p>الأعراض السابقة هي</p>
          <input
            className={
              person === "myself"
                ? "first-questions__button active"
                : "first-questions__button"
            }
            type="button"
            value="لي شخصيا"
            onClick={myself}
          />

          <input
            className={
              person === "anotherPerson"
                ? "first-questions__button active"
                : "first-questions__button"
            }
            type="button"
            value="لشخص أخر اقدم له الرعاية"
            onClick={anotherPerson}
          />
        </div>

        <section className="age-question">
          <p>ما هو عمر الشخص المعني (صاحب الاعراض) ؟</p>

          <form>
            {data.map((ele, index) => (
              <label
                onClick={handleChangeAge}
                className={age === ele.value ? "radio-active" : ""}
                key={index}
              >
                {ele.name}
                <input type="radio" name="age" value={ele.value} />
                <span></span>
              </label>
            ))}
          </form>
        </section>

        <div className="first-questions__one-question">
          <p>ما هو جنس الشخص المعني (صاحب الاعراض)؟</p>

          <input
            className={
              gender === "male"
                ? "first-questions__button active"
                : "first-questions__button"
            }
            type="button"
            value="ذكر"
            onClick={maleGender}
          />

          <input
            className={
              gender === "female"
                ? "first-questions__button active"
                : "first-questions__button"
            }
            type="button"
            value="أنثى"
            onClick={femaleGender}
          />
        </div>

        <NextButton handleNext={handleNext} />
      </section>
    </Fragment>
  );
};

export default First;
