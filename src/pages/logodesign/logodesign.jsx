import React from "react";
import './logodesign.css';
import { useRef } from "react";
import { useEffect} from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import my_logo1 from "../../assets/my_logo (1).jpg";
import my_logo2 from "../../assets/my_logo (2).jpg";
import my_logo3 from "../../assets/my_logo (3).jpg";
import my_logo4 from "../../assets/my_logo (4).jpg";
import my_logo5 from "../../assets/my_logo (5).jpg";
import my_logo6 from "../../assets/my_logo (6).jpg";




function Logodesign() {
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


  return <motion.div className="logodesign_page"
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
    <div className="logo_quote">
      "Logos and branding are so important. In a big part of the world, people cannot read French or English but are great at remembering signs."
    </div>
    <hr />
    <div className="why_me">
      <div>WHY ME ?</div>
      <p>As a logo designer, I possess a unique blend of creativity and strategic thinking. My ability to distill complex concepts into simple yet powerful visuals sets me apart. My dedication to understanding clients' brand identities and translating them into iconic symbols makes me invaluable in shaping businesses' visual narratives.</p>
    </div>
    <hr />
    <div>MY LOGOS</div>
    <div className="my_logos_box">
      <div className="box_row">
        <div className="box_col">
          <img src={my_logo1} className="logo_" alt="" />
        </div>
        <div className="box_col">
          <img src={my_logo2} className="logo_" alt="" />
        </div>
        <div className="box_col">
          <img src={my_logo3} className="logo_" alt="" />
         </div>
      </div>
       <div className="box_row">
        <div className="box_col">
                    <img src={my_logo4} className="logo_" alt="" />
        </div>
        <div className="box_col">
                    <img src={my_logo5} className="logo_" alt="" />
        </div>
        <div className="box_col">
          <img src={my_logo6} alt="" className="logo_"/></div>
      </div>
     
    </div>
     <Footer/>
    

  </motion.div>
  
}

export default Logodesign