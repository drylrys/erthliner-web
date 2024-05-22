import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";
function ContactForm() {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [loadingButton, setLoadingButton] = useState(false);
  const [emailDataError, setEmailDataError] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const handleSendEmail = async () => {
    try {
      setLoadingButton(true);
      const response = await fetch(
        "https://9vi9gnk6af.execute-api.ap-southeast-2.amazonaws.com/default/mailer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData)
        }
      );
      const res = await response.json();

      if (res.status === 400) {
        setLoadingButton(false);

        if (res.type === "validationError") {
          setEmailDataError(res.message);
          return;
        }
        if (res.type === "internalError") {
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
      setLoadingButton(false);
    } catch (error) {
      setLoadingButton(false);
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
        disabled={loadingButton}
        className={`p-4 rounded-md bg-[#BD3531] hover:opacity-70 w-56 text-white flex items-center justify-center gap-3 ${
          loadingButton ? `opacity-70` : ""
        } `}
        onClick={handleSendEmail}
      >
        {loadingButton ? (
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#BD3531]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : (
          ""
        )}
        {loadingButton ? "Sending" : "Submit"}
      </button>
    </div>
    // </section>
  );
}

export default ContactForm;
