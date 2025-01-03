import React from 'react'
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav'
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate()
  return (
    <header className="py-3 px-4 dark:dark">
      <nav className="flex align justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="lg:hidden block">     
            <MobileNav />
          </span>
          <h1 className="font-extrabold text-base sm:text-2xl cursor-pointer secondary text-[#2e4053] dark:text-[#89A8B2]" onClick={()=>navigate('/')}>
            Favour Badakin.
          </h1>
        </div>
        <div className="hidden lg:block ml-72">
          <ul className="flex justify-end gap-x-8">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#dashboards">Dashboards</a>
            </li>
          </ul>
        </div>
        <div className="space-x-4">
          <button className="btn">Get in Touch</button>
          <span>
            <ThemeToggle />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header