import React from "react";
import Header from "../header/header";
import "./home.css"
import RightBox from "../rightbox/rightbox";
import LeftBox from "../leftbox/leftbox";
import Footer from "../footer/footer";
import Service from "../service/service";
import Recentworks from "../../pages/recentworks/recentworks";
import { useRef } from "react";
import { useEffect } from "react";
import { motion, useInView, useAnimation, easeInOut, AnimatePresence } from "framer-motion";




function Home()
{
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



  return (
    <AnimatePresence>
      <motion.div
      className="home_body"
      ref={ref}
      variants={{
      hidden: { opacity: 0, y: 400 },
      visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.2 }}
      exit={easeInOut}>
      

      <Header />
      <div  className="home_content">
        <LeftBox />
        <RightBox/>
      </div>
      <Service />
      <Recentworks/>
      <Footer/>
      
      
   
      </motion.div>
    </AnimatePresence>
    


    
  )
}

export default Home