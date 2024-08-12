import React from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const mode = "dark";
  return (
    <div className="flex items-center gap-2 border-2 p-2 rounded-2xl relative">
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
