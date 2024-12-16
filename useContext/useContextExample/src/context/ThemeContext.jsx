import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const value = {
    name: "shubham",
   age:25
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
