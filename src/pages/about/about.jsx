import React from "react";
import Header from "../../components/header/header";
import './about.css'
import Social from "../../pages/social/social";
import { useRef } from "react";
import { useEffect } from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";

function About() {
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




  return <motion.div className="about_page"
      ref={ref}
      variants={{
      hidden: { opacity: 0, y: 400},
      visible:{opacity:1,y:1},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.3 }}
      exit={easeInOut}>
    
    <Header />
    <div className="about_side_head">
      ABOUT
    </div>
    <div className="quote_me">
      "Every great dream begins with a dreamer. Always remember, you <br />have within you the strength, the patience, <br /> and the passion to reach for the stars to change the world."
    </div>
    <Social/>
 

  </motion.div>
}

export default About