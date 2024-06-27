"use client";

import React from "react";
import { motion } from "framer-motion";
const MotionContainer = ({
  children,
  initial,
  animate,
  transition,
  whileInView,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;

//initial={{ opacity: 0, x: -100 }}
// animate={{ opacity: 1, x: 0 }}
// transition={{ duration: 0.5 }}
