"use client";
import { motion } from "framer-motion";
export const MotionLayout = ({ children }) => {
  return <motion.div layout>{children}</motion.div>;
};
