import React from "react";
import './webdesign.css'
import Header from "../../components/header/header";
import top from "../../assets/top right.png";
import Recentworks from "../recentworks/recentworks.jsx";
import Footer from "../../components/footer/footer";
import { useRef } from "react";
import { useEffect } from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";




function Webdesign() {
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
  


  return <motion.div className="webredesign_page"
  ref={ref}
      variants={{
      hidden: { opacity: 0, y: 400},
      visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.3 }}
    exit={easeInOut}>
    <Header />
    <div className="web_head">
      <div className="page_name">
        REDESIGN
      </div>
      <div className="heading_">
         E-COMMERCE WEBSITE <br /> REDESIGN
      </div>
      <div className="ui_down">
        UI & UX <br /> WEB CONCEPTS
      </div>
    </div>
    <div >
    </div>
    <div className="space_">
      <hr />
    </div>
    <div>PROJECT INFO</div>
    <div className="main_info">
      The main goal of this project was to create a <br /> completely new, user-friendly, UI & UX Design <br /> while embracing a minimalist  style that <br /> highlights the content.
    </div>
    <div className="side_info">
      Certainly, here's the revised paragraph with "I" instead of "you":

As a UI/UX designer, there are several compelling reasons to choose me. First and foremost, I possess a deep passion for crafting user-centric experiences that not only meet but exceed user expectations. My extensive background in user research equips me with valuable insights into user behavior, enabling me to create intuitive and aesthetically pleasing interfaces.

Furthermore, my proficiency in industry-standard design tools, coupled with a keen eye for detail, ensures the delivery of pixel-perfect designs. I pride myself on my ability to collaborate effectively with cross-functional teams, translating complex requirements into elegant, user-friendly solutions. My commitment to staying current with design trends and technologies also guarantees that I can adapt swiftly to evolving design landscapes. By choosing me, you'll gain a dedicated and innovative UI/UX designer committed to elevating your product's user experience to new heights.
    </div>
    <div className="project_link">
      <hr />
      <div className="p_head">PROJECT LINKS</div>
      <hr />
      <a href="https://www.behance.net/blourdhuraju" className="behance_link">
        <div>Behance | My - UI & UX Designs</div>
        <div><img src={top} width={40} alt="" /></div>
      </a>
      <hr />
    </div>
    <Recentworks />
    <Footer/>


  </motion.div>
  
}

export default Webdesign