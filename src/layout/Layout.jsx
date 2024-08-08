import React, { useState } from "react";
import Topbar from "../HomeComponents/Topbar";
import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer"; // Add this line
import Restaurant from "../HomeComponents/Restaurant";
import MobileHeader from "../common-component/MobileHeader";
import Sidebar from "../common-component/Sidebar";

const Layout = ({ children }) => {
  const [isSidebaropen, setisSidebaropen] = useState(false);
  const toggleSlider = () => {
    setisSidebaropen(!isSidebaropen);
  };
  return (
    <>
      <Topbar />
      <Header />
      <Sidebar isopen={isSidebaropen} onclose={toggleSlider} />
      <MobileHeader onclose={toggleSlider} />
      {children}
      {/* <Restaurant className="mt-10" /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
