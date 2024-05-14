"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Icon from "../Icon";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  const [navToggle, setNavToggle] = useState(false);
  const handleToggleNav = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <Sidebar handleToggleNav={handleToggleNav} navToggle={navToggle} />
      <Navigation toggleNav={handleToggleNav} navToggle={navToggle} />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
