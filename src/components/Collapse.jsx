import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function Collapse({ data = [], className }) {
  const [faqs, setFaqs] = useState(data);

  const handleToggle = (index) => {
    setFaqs((prevFaqs) => {
      return prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen }; // Toggle isOpen
        } else {
          return faq; // Return unchanged FAQ item
        }
      });
    });
  };
  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className={`w-full flex flex-col items-center justify-center ${className}`}
    >
      {faqs.map((faq, index) => {
        return (
          <button
            key={index}
            className={`flex w-full lg:w-8/12 flex-col gap-5  border-t-2 ${
              index + 1 === faqs.length ? "border-b-2" : ""
            } p-5`}
            onClick={() => handleToggle(index)}
          >
            <div className="flex w-full justify-between items-center">
              <span className="font-bold text-[25px]">{faq.question}</span>
              <span>
                {faq.isOpen ? (
                  <MdKeyboardArrowUp size={30} />
                ) : (
                  <MdKeyboardArrowDown size={30} />
                )}
              </span>
            </div>
            <div
              className={`text-left text-[20px] transition  duration-700 ease-in-out ${
                faq.isOpen ? "block" : "hidden"
              } `}
            >
              {faq.answer}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Collapse;
