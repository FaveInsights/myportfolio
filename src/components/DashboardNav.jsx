import React from "react";
import ThemeToggle from "./ThemeToggle";
import DashMobileNav from "./DashMobileNav.jsx";
import { useNavigate } from "react-router-dom";


const DashboardNav = () => {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
      navigate('/');
    };
  
  return (
    <header className="py-3 px-4 dark:dark" id="header">
      <nav className="flex py-2 pl-2 pr-4 justify-between items-center fixed top-0 left-0 w-full bg-[#F1F0E8] shadow-md dark:dark dark:bg-[#3C3C3C]">
        <div className="flex items-center space-x-4">
          <span className="lg:hidden block">
            <DashMobileNav />
          </span>
          <h1
            className="font-extrabold text-base sm:text-2xl cursor-pointer secondary text-[#2e4053] dark:text-[#89A8B2]"
            
          >
            <span onClick={handleNavigateToHome}>Favour Badakin.</span>
            
          </h1>
        </div>
        <div className="hidden lg:block ml-72">
          
        </div>
        <div className="space-x-4 flex items-center">
          <span className="">
            <button className="btn" onClick={()=>window.location.href = `mailto:${`favourbadakin@gmail.com`}`}>Get in Touch</button>
          </span>
          <span>
            <ThemeToggle />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNav;
