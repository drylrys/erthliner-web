import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function Collapse({ data = [] }) {
  const [faqs, setFaqs] = useState([
    {
      question: "What is flowbite ?",
      answer:
        " Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more, Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.",
      isOpen: false
    },
    {
      question: "is there a Figma file available",
      answer:
        "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file. Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.",
      isOpen: false
    }
  ]);

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
      className="w-full flex flex-col items-center justify-center "
    >
      {faqs.map((faq, index) => {
        return (
          <button
            key={index}
            className={`flex w-1/2 flex-col gap-5  border-t-2 ${
              index + 1 === faqs.length ? "border-b-2" : ""
            } p-5`}
            onClick={() => handleToggle(index)}
          >
            <div className="flex w-full justify-between items-center">
              <span className="font-bold text-[25px]">{faq.question}</span>
              <span>
                {faq.isOpen ? (
                  <MdKeyboardArrowDown size={30} />
                ) : (
                  <MdKeyboardArrowUp size={30} />
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
