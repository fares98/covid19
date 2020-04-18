import React, { createContext } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  return (
    <AppContext.Provider value={props.value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
