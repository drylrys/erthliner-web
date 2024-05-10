import React from "react";
import Icon from "../Icon";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div class="grid grid-cols-4 gap-4 px-20">
        <div className="flex justify-center">
          <div className="flex flex-col p-4">
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
        <div className="flex justify-center">
          <div className=" flex flex-col p-4 gap-4">
            <div>
              <h1 className="font-extrabold">Working Hours</h1>
              <h4 className="text-sm">Mon - Fri: 8am - 5pm</h4>
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
        <div className="flex justify-center">
          <div className=" flex flex-col gap-3 p-4">
            <h1 className="font-extrabold">CONTACT US</h1>
            <div>
              <h4 className="text-sm">Phone Nos:</h4>
              <h4 className="text-sm">+63 987 654 3210 (Globe)</h4>
              <h4 className="text-sm">+63 987 654 3210 (Smart)</h4>
              <h4 className="text-sm">Tel. Nos:</h4>
              <h4 className="text-sm">+632 987 6543</h4>
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
        <div className="flex justify-center">
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
