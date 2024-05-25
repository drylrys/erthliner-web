import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Reveal = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isDesktop, setIsDesktop] = useState(true); // State to track if it's desktop view

  useEffect(() => {
    // Function to check if it's desktop view based on viewport width
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the threshold as needed
    };

    // Event listener to update state on window resize
    window.addEventListener("resize", checkIsDesktop);

    // Initial check on component mount
    checkIsDesktop();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView && isDesktop) {
      // Check if it's in view and desktop view
      mainControls.start("visible");
    }
  }, [isInView, isDesktop]); // Add isDesktop to dependency array

  return (
    <>
      {isDesktop && ( // Render motion.div only if it's desktop view
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.25 }}
          ref={ref}
          className={className}
        >
          {children}
        </motion.div>
      )}
      {!isDesktop && children}
    </>
  );
};
