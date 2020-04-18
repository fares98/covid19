import React, { createContext } from "react";

export const HomeContext = createContext();

const HomeProvider = (props) => (
  <HomeContext.Provider value={props.value}>
    {props.children}
  </HomeContext.Provider>
);

export default HomeProvider;
