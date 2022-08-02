import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../AppContext";
import SubMenu from "./SubMenu";
import links from "./data";

const Navbar = () => {
  const { openSubMenuTab, hideSubMenuTab, toggleSideBar } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const axis = e.target.getBoundingClientRect();
    const center = (axis.left + axis.right) / 2;
    openSubMenuTab(page, center);
  };

  const hideSubMenu = (e) => {
    hideSubMenuTab();
  };

  return (
    <div>
      <div className="w-full h-[10vh] flex justify-between items-center bg-transparent">
        <div>
          <h1 className="text-3xl font-extrabold text-white cursor-pointer">
            Stripe
          </h1>
        </div>
        <ul className="flex-row hidden gap-20 text-white md:flex">
          {links.map((link) => (
            <li
              className="tracking-wider capitalize cursor-pointer"
              onMouseOver={displaySubMenu}
              onMouseOut={hideSubMenu}
              key={link.id}
            >
              {link.title}
            </li>
          ))}
        </ul>
        <button className="hidden px-8 py-2 text-white bg-black rounded-full md:flex">
          Sign In
        </button>
        <button
          className="absolute block px-2 py-2 text-white bg-black rounded-sm md:hidden top-17 right-10"
          onClick={() => toggleSideBar()}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <SubMenu />
    </div>
  );
};

export default Navbar;
