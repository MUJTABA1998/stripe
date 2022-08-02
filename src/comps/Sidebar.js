import React from "react";
import { useGlobalContext } from "../AppContext";
import links from "./data";
import { RiCloseFill } from "react-icons/ri";
import { MdViewList } from "react-icons/md";

const Sidebar = () => {
  const { openSideBar, toggleSideBar } = useGlobalContext();

  return (
    <div
      className={` ${
        openSideBar
          ? "fixed top-0 left-0 transition-all duration-200 ease-in flex items-center justify-center w-full h-screen px-10 py-10 bg-overlay translate-y-[0px]"
          : "translate-y-[-3000px] h-[0px]"
      }`}
    >
      <button
        className="absolute text-2xl text-secondary top-20 right-20"
        onClick={() => toggleSideBar()}
      >
        <RiCloseFill />
      </button>
      <div className="flex flex-col justify-start w-screen gap-14 h-[90vh] bg-white px-10 rounded-lg py-20">
        {links.map((link) => (
          <div
            className="flex flex-col items-start justify-start gap-5"
            key={link.id}
          >
            <h1 className="text-xl font-extrabold capitalize">{link.title}</h1>
            <div className="flex flex-wrap items-start justify-start gap-10">
              {link.sublinks.map((sub, index) => (
                <div
                  className="flex items-center justify-start gap-1 text-xs capitalize cursor-pointer"
                  key={index}
                >
                  <MdViewList className="text-secondary" />
                  <h1 className="text-xs">{sub}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
