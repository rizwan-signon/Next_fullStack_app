"use client";
import React from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "@/contextApi/ThemeContext";
import { useContext } from "react";
const DarkMode = () => {
  const { toggleMode, mode } = useContext(ThemeContext);
  return (
    <div
      onClick={toggleMode}
      className="flex items-center gap-2 border-2 p-2 rounded-2xl relative cursor-pointer"
    >
      <div>
        <MdOutlineLightMode />
      </div>
      <div>
        <MdDarkMode />
      </div>
      <div
        className={`${
          mode === "dark"
            ? "min-w-4 min-h-4 rounded-full absolute bg-blue-700 right-2"
            : "min-w-4 min-h-4 rounded-full absolute bg-blue-700 left-2"
        }`}
      ></div>
    </div>
  );
};

export default DarkMode;
