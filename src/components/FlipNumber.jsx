import { motion } from "framer-motion";

export const FlipNumber = ({ value }) => {
  return (
    <motion.span
      key={value}
      initial={{ rotateX: -90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ display: "inline-block", margin: "0 5px" }}
    >
      {value.toString().padStart(2, "0")}
    </motion.span>
  );
};