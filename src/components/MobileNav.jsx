import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import {
  Link as Rscroll,
  animateScroll as scroll,
} from "react-scroll";

const MobileNav = () => {
  const [menu, setMenu] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const openMenu = () => {
    setMenu({ isPaneOpen: true });
  };
  const closeMenu = () => {

    setMenu({ isPaneOpen: false })

  };
  
  
  return (
    <section>
      <div className="dark:dark">
        <button className="font-extrabold" onClick={openMenu}>
          <RxHamburgerMenu size={28} />
        </button>
      </div>

      <SlidingPane
        className="newstyle overflow-hidden whitespace-nowrap dark:dark"
        overlayClassName="absolute z-10"
        isOpen={menu.isPaneOpen}
        hideHeader
        onRequestClose={closeMenu}
        from="left"
      >
        <button onClick={closeMenu}>
          <GrClose size={18} />
        </button>
        <div className="text-center">
          <ul className="text-lg font-bold mt-5">
            <li>
              <Rscroll
              className="cursor-pointer"
                to="header"
                onClick={closeMenu}
                smooth={true}
                duration={1000}
              >
                Home
              </Rscroll>
            </li>
            <li className="my-2">
              <Rscroll
              className="cursor-pointer"
                to="about"
                onClick={closeMenu}
                smooth={true}
                spy={true}
                offset={-65}
                duration={1000}
              >
                About
              </Rscroll>
            </li>
            <li>
              <Rscroll
              className="cursor-pointer"
                to="projects"
                onClick={closeMenu}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-55}
              >
                Projects
              </Rscroll>
            </li>
            <li className="my-2" onClick={closeMenu}>
              <Rscroll
              className="cursor-pointer"
                to="dashboards"
                onClick={closeMenu}
                smooth={true}
                duration={1800}
                spy={true}
                offset={-65}
              >
                Dashboards
              </Rscroll>
            </li>
            
          </ul>
        </div>
        <br />
      </SlidingPane>
    </section>
  );
};

export default MobileNav;
