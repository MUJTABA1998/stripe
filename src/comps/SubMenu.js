import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../AppContext";
import { BsTriangleFill } from "react-icons/bs";

const SubMenu = () => {
  const { openSubMenu, location, page } = useGlobalContext();
  const menuRef = useRef(null);

  useEffect(() => {
    menuRef.current.style.left = `${location - 190}px`;
  });

  return (
    <div
      className={` transition-all duration-200 ease-in ${
        openSubMenu
          ? `flex fixed md:top-[10%] lg:top-[15%] justify-center items-center flex-col gap-5 bg-black text-white rounded-lg max-w-[500px] mx-auto max-h-[150px] px-10 py-7 opacity-100`
          : "w-0 h-0 hidden"
      }`}
      ref={menuRef}
    >
      <BsTriangleFill className="absolute top-[-10%] flex flex-col ga-5 items-center justify-center text-xs text-black" />
      <div className="flex flex-row items-center justify-start w-auto h-auto gap-5">
        {page.links.map((el, index) => (
          <h2 key={index} className="text-xs capitalize">
            {el}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
