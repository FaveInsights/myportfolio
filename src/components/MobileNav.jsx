import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const MobileNav = () => {
  const [menu, setMenu] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const openMenu = () => {
    setMenu({ isPaneOpen: true });
  };
  const closeMenu = () => {
    setMenu({ isPaneOpen: false });
  };
  return (
    <>
      <div className="dark:dark">
        <button className="font-extrabold" onClick={openMenu}>
          <RxHamburgerMenu size={28} />
        </button>
      </div>
      <SlidingPane
        className="some-custom-class overflow-hidden whitespace-nowrap"
        overlayClassName="some-custom-overlay-class bg-blue-100 absolute z-10"
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
            <li onClick={closeMenu}>
              <a href="/#">Home</a>
            </li>
            <li className="my-2" onClick={closeMenu}>
              <a href="#about">About</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#projects">Projects</a>
            </li>
            <li className="my-2" onClick={closeMenu}>
              <a href="#dashboards">Dashboards</a>
            </li>
            <li onClick={closeMenu}>
              <a href="/#">Contact</a>
            </li>
          </ul>
          
        </div>
        <br />
      </SlidingPane>
    </>
  );
};

export default MobileNav;
