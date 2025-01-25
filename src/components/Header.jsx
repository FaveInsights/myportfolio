import React from "react";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import { useNavigate } from "react-router-dom";
import {
  Link as Rscroll,
  animateScroll as scroll,
} from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="py-3 px-4 dark:dark" id="header">
      <nav className="flex py-2 pl-2 pr-4 justify-between items-center fixed top-0 left-0 w-full bg-[#F1F0E8] shadow-md dark:dark dark:bg-[#3C3C3C]">
        <div className="flex items-center space-x-4">
          <span className="lg:hidden block">
            <MobileNav />
          </span>
          <h1
            className="font-extrabold text-base sm:text-2xl cursor-pointer secondary text-[#2e4053] dark:text-[#89A8B2]"
            onClick={() => navigate("/")}
          >
            <Rscroll to='header' smooth={true}>Favour Badakin.</Rscroll>
            
          </h1>
        </div>
        <div className="hidden lg:block ml-72">
          <ul className="flex justify-end gap-x-8">
            <li>
              <Rscroll
               to="about"
               className="cursor-pointer pb-2 border-[#99A8B2] hover:border-b-2 hover:opacity-70 transition"
                smooth={true}
                offset={-59}
                duration={1000}>About</Rscroll>
            </li>
            <li>
              <Rscroll to="projects"
               className="cursor-pointer pb-2 border-[#99A8B2] hover:border-b-2 hover:opacity-70 transition"
                smooth={true}
                offset={-57}
                duration={1000}>Projects</Rscroll>
            </li>
            <li>
              <Rscroll to="dashboards"
               className="cursor-pointer pb-2 border-[#99A8B2] hover:border-b-2 hover:opacity-70 transition"
                smooth={true}
                offset={-59}
                duration={1000}>Dashboards</Rscroll>
            </li>
          </ul>
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

export default Header;
