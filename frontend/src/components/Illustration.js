import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as Hero } from "../assets/illustrations/female-reproductive.svg";


export default function Illustration({ className }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [-6, 0, -4, 0] }} // subtle float
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <Hero className="Female reproductive system-pana-svg" />
    </motion.div>
  );
}

/*
  This component gently moves the SVG up and down (sway).
  You can pass className to size/position it.
*/
