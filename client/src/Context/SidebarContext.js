import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarMobile, setIsSidebarMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleSidebarMobile = () => {
    setIsSidebarMobile((prev) => !prev);
  };
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, isSidebarMobile, toggleSidebar, toggleSidebarMobile, setIsSidebarMobile }}>
      {children}
    </SidebarContext.Provider>
  );
};
