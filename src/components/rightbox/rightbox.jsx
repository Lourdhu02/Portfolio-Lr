import React from "react";
import "./rightbox.css"
import download from "../../assets/download.png"
import { motion, useInView, useAnimation, easeInOut, AnimatePresence } from "framer-motion";


 

function RightBox() {
  return <div>
    <motion.div className="animation">
      <img src={download}  alt="logo" className="animated_logo" />
    </motion.div>
  </div>
}
export default RightBox