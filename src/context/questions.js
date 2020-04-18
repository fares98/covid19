import React, { createContext } from "react";

export const QuestionsContext = createContext();

const QuestionsProvider = (props) => {
  return (
    <QuestionsContext.Provider value={props.value}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
