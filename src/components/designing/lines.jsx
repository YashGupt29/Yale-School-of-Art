import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Lines = () => {
  const [inView, setInView] = useState(false);

  let timeoutId; // To store the timeout ID

  const handleScroll = () => {
    // Clear the existing timeout to avoid multiple executions
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a delay (e.g., 200ms) before checking if the element is in view
    timeoutId = setTimeout(() => {
      const top = document
        .getElementById("lines-container")
        .getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight && top > 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    }, 10); // Adjust the delay as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clear timeout if component unmounts
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div id="lines-container" className="space-y-6 flex flex-col">
      <div className="flex flex-col gap-5">
        <motion.div
          className="bg-[#d89c0c] h-10 w-1/6 rounded-r-3xl"
          initial={{ scaleY: 0, x: -50 }}
          animate={{ scaleY: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="bg-[#d89c0c] h-10 w-1/3 rounded-r-3xl"
          initial={{ scaleY: 0, x: -50 }}
          animate={{ scaleY: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </div>
      <motion.div
        className="bg-[#d89c0c] h-10 w-10/12 rounded-l-3xl  md:ml-[260px]"
        initial={{ scaleY: 0, x: 50 }}
        animate={{ scaleY: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
    </div>
  );
};

export default Lines;
