import React from "react";
import { Veggie } from "./Veggie";
import { Popular } from "./Popular";
import { motion } from "framer-motion";

export const Homepage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggie />
    </motion.div>
  );
};
