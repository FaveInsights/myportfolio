import React, { useContext, useState} from "react";
import { ThemeContext } from "../ThemeContext";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  const [isTranstioning, setIsTransitioning] = useState(false);
  const handleThemeToggle = () =>{
    toggleTheme();
    setIsTransitioning(true);
    setTimeout(()=>{
      setIsTransitioning(false)
    },500);
  };
  return (
    <Tippy
      content={theme === "dark" ? "Light Mode" : "Dark Mode"}
      animation="fade"
      duration={600}
    >
      <button onClick={handleThemeToggle} className={isTranstioning ? "trans" : ''}>
        {theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
    </Tippy>
  );
};

export default ThemeToggle;
