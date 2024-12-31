import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
    const { toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
       {theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode /> }
      
    </button>
  );
}

export default ThemeToggle