import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { createBrowserHistory } from "history";
import moment from "moment";

import { withFirebase } from "../../Components/Firebase";
import Loading from "../../Components/Loading";
import data from "./data";
import "./result.css";

const Result = (props) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  const addDataToFirebase = (allData, statusColor) => {
    const { firebase } = props;
    const collection = firebase.db.collection("allData");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    collection
      .doc(userInfo.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          collection.doc(userInfo.id).set({
            data: [
              ...doc.data().data,
              {
                questions: allData,
                statusColor,
                time: moment().format("LLLL"),
                id: userInfo.id,
              },
            ],
            userInfo,
          });
          console.log("data added again");
        } else {
          collection.doc(userInfo.id).set({
            data: [
              {
                questions: allData,
                statusColor,
                time: moment().format("LLLL"),
                id: userInfo.id,
              },
            ],
            userInfo,
          });
          console.log("data added");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("allData"));

    let acceptedCommon = 0,
      deniedCommon = 0,
      deniedLessCommon = 0,
      acceptedLessCommon = 0,
      acceptedGeneral = 0,
      deniedGeneral = 0;

    for (const prop in allData) {
      for (const secondProp in allData[prop]) {
        /* Check Answer The General Questions (The questions that found in the second page) */
        if (prop === "general") {
          if (allData[prop][secondProp] === "no") {
            deniedGeneral++;
          } else {
            acceptedGeneral++;
          }

          /* Check Answer The Common Questions (The questions that found in the Third page) */
        } else if (prop === "common") {
          if (allData[prop][secondProp] === "no") {
            deniedCommon++;
          } else {
            acceptedCommon++;
          }

          /* Check Answer The Less Common Questions (The questions that found in the Fourth page) */
        } else if (prop === "lessCommon") {
          if (allData[prop][secondProp] === "no") {
            deniedLessCommon++;
          } else {
            acceptedLessCommon++;
          }
        }
      }
    }

    /* Get The Final Result */
    let statusValue = "";

    if (acceptedGeneral + acceptedCommon + acceptedLessCommon === 0) {
      statusValue = "green";
    } else if (acceptedCommon === 0 && acceptedLessCommon >= 1) {
      statusValue = "yellow";
    } else if (acceptedCommon === 1) {
      statusValue = "orange";
    } else if (acceptedCommon > 1) {
      statusValue = "red";
    }

    loading && setStatus(statusValue);
    loading && addDataToFirebase(allData, statusValue);
    setLoading(false);
  }, [loading]);

  return loading ? (
    <Loading />
  ) : (
    <section className={`result ${status}`}>
      <nav className="result__navbar">
        <Button
          className="result__navbar__done"
          onClick={() => {
            createBrowserHistory().push("/");
            window.location.reload();
          }}
        >
          إنهاء
        </Button>
      </nav>

      <article className="result__article">
        <h2 className="result__title">{data[status].title}</h2>

        {data[status].text.map((ele, index) => (
          <p key={index}>{ele}</p>
        ))}
      </article>
    </section>
  );
};

const ResultWithFirebase = withFirebase(Result);
export default ResultWithFirebase;
