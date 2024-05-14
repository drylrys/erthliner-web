"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";

function LandingPageNavigation({ toggleNav, navToggle }) {
  const router = useNavigate();

  const handleToggleNav = () => {
    toggleNav();
  };

  const navPages = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about-us",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Our People",
      link: "/our-people",
    },
    {
      label: "Advocacy",
      link: "/advocacy",
    },
    {
      label: "FAQ",
      link: "/faq",
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <nav className="py-2 z-40 mx-6">
      <div className="flex items-center justify-between">
        <div className="flex relative h-full lg:pl-16">
          <a href="/">
            <Icon
              src="/assets/img/logo.png"
              alt="logo"
              className="z-0 w-12 h-12"
            />
          </a>
        </div>
        <div className="hidden md:block w-full text-center">
          <ul className="flex justify-center md:gap-[10px] lg:gap-[32px]">
            {navPages.map((page, index) => {
              return (
                <li key={index}>
                  <a
                    className="font-bold text-xl hover:border-b-2 hover:border-black pb-2"
                    href={page.link}
                  >
                    {page.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="hidden md:block">
        <h1 className="text-[#FDB827] font-bold border border-[#F1F1F1] rounded-lg p-4">
          Call us: +63 987 654 3210
        </h1>
      </div> */}

        <div className="md:hidden" onClick={handleToggleNav}>
          {!navToggle && (
            <Icon
              src="/assets/svg/hamburger.svg"
              alt="button"
              height={20}
              width={20}
              className=" cursor-pointer fill-[#030303] z-10 w-10 h-10"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default LandingPageNavigation;
