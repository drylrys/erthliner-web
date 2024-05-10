"use client";
import React from "react";
import customs_logo from "../assets/img/customs_logo1.png";
import dti_logo from "../assets/img/dti_logo1.png";
import peza_logo from "../assets/img/peza_logo1.png";
import ppa_logo from "../assets/img/ppa_logo1.png";

function Accreditation() {
  return (
    <div className="flex flex-row justify-between items-center gap-4 px-64 p-6">
      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl text-[#FDB827]">
        Accreditations & Affiliations
      </h1>
      <div className=" flex gap-6 md:gap-10 ">
        <img
          src={customs_logo}
          alt="logo"
          className="filter grayscale aspect-[3/2] object-contain w-12  h-32 sm:w-16 md:w-24"
        />
        <img
          src={dti_logo}
          className="filter grayscale aspect-[3/2] object-contain w-12 h-32 sm:w-16 md:w-24"
          alt="logo"
        />
        <img
          src={peza_logo}
          className="filter grayscale aspect-[3/2] object-contain w-8 h-32 sm:w-16 md:w-24"
          alt="logo"
        />
        <img
          src={ppa_logo}
          className="filter grayscale aspect-[3/2] object-contain w-32 h-32 sm:w-16 md:w-24"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Accreditation;
