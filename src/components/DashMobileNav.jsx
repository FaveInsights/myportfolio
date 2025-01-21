import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useNavigate } from "react-router-dom";

const DashMobileNav = () => {
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
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
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
         <ul>
          <li onClick={handleNavigateToHome} className="cursor-pointer">Home</li>
         </ul>
        </div>
        <br />
      </SlidingPane>
    </section>
  );
};

export default DashMobileNav;
