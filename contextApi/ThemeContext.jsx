"use client";
import { createContext, useState } from "react";
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggleMode, mode }}>
      <div
        className={`${
          mode === "dark" ? " text-white bg-green-400" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
