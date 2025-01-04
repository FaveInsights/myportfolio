import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Tippy
      content={theme === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"}
    >
      <button onClick={toggleTheme}>
       
        {theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
    </Tippy>
  );
};

export default ThemeToggle;
