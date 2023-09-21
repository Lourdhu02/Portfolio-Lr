/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import './recentworks.css'
import { useRef } from "react";
import { useEffect } from "react";
import pic_1 from '../../assets/Screenshot (30).png'
import pic_2 from '../../assets/Screenshot (31).png'
import pic_3 from '../../assets/Screenshot (32).png'
import pic_4 from '../../assets/Screenshot (33).png'
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";



function Recentworks()
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



  return <motion.div className="recent_component"
  ref={ref}
      variants={{
      hidden: { opacity: 0, y: 400},
      visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.3 }}
      exit={easeInOut}>
    <div className="recent_head">
      RECENT WORKS
    </div>
    <hr />
    <div className="my_projects">
      MY PROJECTS
    </div>
    <div className="box_">
      <ul>
        <li>
          <div className="ex_img">EXPLORE</div>
          <a href="https://lourdhu02.github.io/weather_app/">
            <img src={pic_1} alt="" className="rec_w" />
          </a>
        </li>
        <li>
          <div className="ex_img">EXPLORE</div>
          <a href="https://lourdhu02.github.io/nike_website/">
            <img src={pic_2} alt="" className="rec_w" />
          </a>
          
          </li>
        <li>
          <div className="ex_img">EXPLORE</div>
          <a href="https://lourdhu02.github.io/manga_store/">
            <img src={pic_3} alt="" className="rec_w" />
          </a>
        </li>
        <li>
          <div className="ex_img">EXPLORE</div>
          <a href="https://lourdhu02.github.io/create_account/">
            <img src={pic_4} alt="" className="rec_w" />  
          </a>
          </li>
      </ul>
    </div>








  </motion.div>
}

export default Recentworks