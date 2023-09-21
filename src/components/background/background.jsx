import React from "react";
import bg from '../../assets/bg.jpg';
import './background.css';
import { useRef } from "react";
import { useEffect } from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";

function Background() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slideControls.start("visible")

    }
  }, [isInview,mainControls,slideControls])



  return <motion.div className="img-hover-zoom"
  ref={ref}
      variants={{
      hidden: { opacity: 0, y: 400},
      visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.2 }}
    exit={easeInOut}>
    <img src={bg} className="bg_img" alt="bg_img" />

  </motion.div>
}

export default Background