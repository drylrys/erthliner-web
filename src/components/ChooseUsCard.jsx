import React from "react";
import FormatNumber from "../lib/FormatNumber";
import { motion } from "framer-motion";
function ChooseUsCard({
  className,
  title,
  number,
  content,
  invert = false,
  whyChooseUsRef,
  style,
  initial,
  animate,
  transition,
  whileInView
}) {
  return (
    <motion.div
      ref={whyChooseUsRef}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      style={style}
      className={`relative ${className} border-b-8 border-r-8 p-6 border-[#59886B] shadow-2xl bg-white`}
    >
      <div className="absolute top-[-70px] left-5 font-extrabold right-100 text-[100px] text-[#59886B] ">
        {FormatNumber(number)}
      </div>
      <div className="basis-4 mt-50">
        <h1 className={`font-bold text-2xl mb-4 mt-10  text-[#000000]`}>
          {title}
        </h1>
        <p>{content}</p>
      </div>
    </motion.div>
  );
}

export default ChooseUsCard;
