"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Icon from "../Icon";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  const [navToggle, setNavToggle] = useState(false);
  const handleToggleNav = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
        } else {
          entry.target.classList.remove("animate-show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".animate-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="max-w-[1900px] mr-auto ml-auto bg-[#FAFAFA]">
        <Sidebar handleToggleNav={handleToggleNav} navToggle={navToggle} />
        <Navigation toggleNav={handleToggleNav} navToggle={navToggle} />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
