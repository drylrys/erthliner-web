import React from "react";
import Icon from "../Icon";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="grid grid-row-4 md:grid-cols-4 gap-4 px-5 mt-20 ">
        <div className="flex lg:justify-center order-4 lg:order-1">
          <div className="flex flex-col p-4 justify-center items-center">
            <a href="/">
              <Icon
                src="/assets/img/logo.png"
                alt="logo"
                className="z-0 w-16 h-16"
              />
            </a>
            <h4 className="text-sm">Erth Liner Cargo Express Co.</h4>
            <h4 className="text-sm">
              © 2024 by Erth Liner Cargo Express Co.. ALL RIGHTS RESERVED.
            </h4>
          </div>
        </div>
        <div className="flex lg:justify-center order-1 lg:order-2">
          <div className=" flex flex-col p-4 gap-4">
            <div>
              <h1 className="font-extrabold">Working Hours</h1>
              <h4 className="text-sm">Mon - Fri: 8am - 5pm</h4>
              <h4 className="text-sm">
                With 24/7 Customer Care specialist available{" "}
              </h4>
            </div>
            <div>
              <h1 className="font-extrabold">BUSINESS ADDRESS</h1>
              <h4 className="text-sm">
                Room 611 Equitable Center Building 262 1009 Juan Luna Binondo
                Manila Philippine
              </h4>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-center order-2 lg:order-3">
          <div className=" flex flex-col gap-3 p-4">
            <h1 className="font-extrabold">CONTACT US</h1>
            <div>
              <h4 className="text-sm">Tel. Nos:</h4>
              <h4 className="text-sm">(+632) 8244-24-37</h4>
              <h4 className="text-sm">(+632) 8986-89-23</h4>
            </div>
            <div>
              <h1 className="font-extrabold">
                We are available for face-to-face meetings or online meetings.
              </h1>
              <a href="#" className="underline">
                Book A Meeting
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-3 lg:order-4">
          <div className=" flex flex-col p-4 gap-4">
            <h1 className="font-extrabold">FOLLOW US</h1>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100066385722906">
                <FaFacebook size={30} />
              </a>
              <FaInstagram size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
