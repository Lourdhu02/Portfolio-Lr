import React from "react";
import './service.css'
import { useRef } from "react";
import { useEffect } from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";


function Service() {
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



  return <motion.div className="service_component"
  ref={ref}
      variants={{
      hidden: { opacity: 0, y: 400},
      visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.3 }}
      exit={easeInOut}>

    


    <div className="service_head">
      SERVICE
    </div>
    < div className="my_self">
      My name is Lourdhu Raju, I'm an Independent Graphic Designer <br /> and Web Developer  from Andhra Pradesh, India <br />  With a strong passion for all things visual,<br /> I specialize  in crafting captivating digital interfaces through <br />  UI/UX design and innovative Website Developing through React.js.
    </div>
    <div className="sec_head">
      STRONGLY FOCUSED ON
    </div>
    <div className="ux_head_">
      UI / UX <br />
DIGITAL EXPERIENCES
    </div>
    <div className="ux_content">
      With a nod to the contemporary, my design style <br /> can best be 
       described as modern and minimal. <br /> I believe in the power of simplicity, in the elegance of clean lines <br />  and the beauty of well-chosen elements.
    </div>
    <div className="web_head_">
      FUll STACK DEVELOPER

    </div>
    <div className="web_content">
      I’m a freelance full stack developer, specialized in development <br /> of web applications using React, Node.js & more.. <br /> 
      I create fast, clean, and maintainable web applications, ready to scale from few users to thousands. <br /> I can help you deliver a seamless and engaging experience to your users. 

    </div>
    <div className="intrest_">
      <hr />
      <div>ALSO LOVE TO MAKE</div>
      <div className="Brand_">BRAND IDENTITYES <br />
DESIGN DIRECTION</div>
    </div>

  </motion.div>
}

export default Service