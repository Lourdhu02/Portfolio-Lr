import React from "react";
import "./explore.css"
import top from "../../assets/top right.png"
import Header from "../../components/header/header";
import { useRef } from "react";
import {Link} from 'react-router-dom'
import Footer from "../../components/footer/footer";
import { useEffect } from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";

function Explore() {
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


  
  return <motion.div className="explore_content"
  ref={ref}
      variants={{
      hidden: { opacity: 0, y: 400},
      visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.3 }}
      exit={easeInOut}>
    <Header/>
    <p className="side_head_explore">EXPLORE</p>
    <div className="explore_heading">
      SELECTED WORKS (2021 <br />
- 2023)
    </div>
    <div className="explore_info">
      Overview of my latest and featured projects within Digital <br />Intarface Design,Web Development <br />Branding and Art Direction.
    </div>
    <br />
    <hr />
    <div className="select_work"> SELECTED WORKS</div>

    <br />
    <hr />
    <div className="Webdevelopment_">
      <Link to='/webdev' className="_link_">
      <div className="head_text">Website Devlopment for E-Commerce and Personal</div>
        <img src={top} width={40} alt="top_icon" />
      </Link>
    </div>
    <hr />
    <div className="Behance_">
      <Link to='/webdesign' className="_link_">
      <div className="head_text">UI/UX Design</div>
        <img src={top} width={40} alt="top_icon" />
      </Link>
    </div>
    
    <hr />
    
    <div className="Brand_">
      <Link to='/logodesign' className="_link_">
      <div className="head_text">Logo Design</div>
        <img src={top} width={40} alt="top_icon" />
      </Link>
    </div>

    <hr />
    
    <Footer/>

  </motion.div>
}

export default Explore