import { useState, createContext, useContext } from "react";
import links from "./comps/data";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [location, setLocation] = useState(0);
  const [page, setPage] = useState({
    page: "",
    links: [],
  });

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const openSubMenuTab = (text, coordinates) => {
    const item = links.find((el) => el.title === text.toLowerCase());
    setPage({
      page: item.title,
      links: item.sublinks,
    });
    console.log(page);
    setLocation(coordinates);
    setOpenSubMenu(true);
  };

  const hideSubMenuTab = () => {
    setOpenSubMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSideBar,
        toggleSideBar,
        openSubMenu,
        openSubMenuTab,
        hideSubMenuTab,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
