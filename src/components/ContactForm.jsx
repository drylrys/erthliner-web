import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";

import { toast } from "react-toastify";
function ContactForm() {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [emailDataError, setEmailDataError] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const handleSendEmail = async () => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        const error = await response.json();
        if (error.type === "validationError") {
          setEmailDataError(error.message);
          return;
        }
        if (error.type === "internalError") {
          return toast.error("Something went wrong");
        }
      }
      setEmailDataError({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
      setEmailData({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
      toast.success("Inquiry successfully sent.");
    } catch (error) {
      console.log("test", error);
    }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    setEmailData({ ...emailData, [e.target.id]: e.target.value });
  };

  return (
    // <section className="flex-1 bg-[#F1F1F1] px-4 py-10 rounded-br-lg rounded-tr-lg">
    <div className="flex flex-col items-center gap-5 bg-[#FFFFFF] lg:w-11/12 xl:w-8/12 py-14 rounded-3xl z-50 relative shadow-xl">
      <h1 className="text-[40px] font-semibold">Get a Free Quote</h1>
      <div className="flex flex-col gap-5 md:px-14 px-8 w-full">
        {/* <div className="flex flex-col md:flex-row gap-5"> */}
        <div>
          <label className="flex gap-2 items-center pb-2">
            <AiOutlineUser />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter your full name here"
            className="border-2 p-3 rounded-md  w-full"
            value={emailData.name}
            onChange={handleChange}
          />
          {emailDataError.name ? (
            <p className="font-thin text-sm text-red-600">
              {emailDataError.name}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label className="flex gap-2 items-center pb-2">
            <AiOutlineMail />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email address here"
            className="border-2 p-3 rounded-md   w-full"
            value={emailData.email}
            onChange={handleChange}
          />
          {emailDataError.email ? (
            <p className="font-thin text-sm text-red-600">
              {emailDataError.email}
            </p>
          ) : (
            ""
          )}
        </div>
        {/* </div> */}
        <div>
          <label className="flex gap-2 items-center pb-2">
            <FiPhone />
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            required
            placeholder="Enter your phone number here"
            className="border-2 p-3 rounded-md  w-full"
            value={emailData.phoneNumber}
            onChange={handleChange}
          />
          {emailDataError.phoneNumber ? (
            <p className="font-thin text-sm text-red-600">
              {emailDataError.phoneNumber}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label className="flex gap-2 items-center pb-2">
            <BiMessageAlt />
            Message
          </label>
          <textarea
            name="Message"
            id="message"
            cols={30}
            rows={5}
            placeholder="Enter your message here"
            className="border-2 p-3 rounded-md  w-full"
            value={emailData.message}
            onChange={handleChange}
          ></textarea>
          {emailDataError.message ? (
            <p className="font-thin text-sm text-red-600">
              {emailDataError.message}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <button
        className=" p-4 rounded-md bg-[#BD3531] hover:opacity-70 w-56 text-white"
        onClick={handleSendEmail}
      >
        Submit
      </button>
    </div>
    // </section>
  );
}

export default ContactForm;
