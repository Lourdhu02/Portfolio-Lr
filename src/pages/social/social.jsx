import React from "react";
import "./social.css"
import down from "../../assets/down.png"
import top from "../../assets/top right.png"
import pic from "../../assets/pic.png"
import Footer from "../../components/footer/footer";
import { useRef } from "react";
import { useEffect} from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";


function Social() {
  
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


  return <motion.div className="Social_media"
      ref={ref}
      variants={{
      hidden: { opacity: 0, y: 400},
      visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.3 }}
    exit={easeInOut}>
    <div className="social_head">
      <hr />
      SOCIAL MEDIA
    </div>
    <br />
    <div className="social_content" >
      If you would like to keep up on the latest <br /> graphic content, come by and connect with me <br /> on Instagram
    </div>
    <br />

    <div className="arrow_icon">
      <img src={down} alt="down_arrow" width={35} />
    </div>
    <br />
    <div className="Image_me">
      <img src={pic} alt="down_arrow" width={400} />

    </div>
    <br />
    
    

    <div className="follow_me">FOLLOW ME ON INSTAGRAM</div>
    <div className="social_media_head">
      SOCIAL MEADIA LINKS
    </div>
    <div className="social_links">
      <div><hr /></div>
      <a className="link_a" href="https://www.behance.net/blourdhuraju">
        <div>Behance</div>
        <img src={top} alt="top_arrow" width={40} />
      </a>
      <div><hr /></div>
      <a className="link_a" href="https://www.instagram.com/_the_reba_l/?next=%2F">
        <div>Instagram</div>
        <img src={top} alt="top_arrow" width={40} />
      </a>
      <div><hr /></div>
      <a className="link_a" href="https://in.pinterest.com/blourdhur/">
        <div>Printrest</div>
        <img src={top} alt="top_arrow" width={40} />
      </a>
     <div><hr /></div>
      <a className="link_a" href="https://dribbble.com/Mikey_02">
        <div>Dribbble</div>
        <img src={top} alt="top_arrow" width={40} />
      </a>
        



      <div>
        <hr />
      </div>
      <div className="Links__">
        </div>
    <Footer/>
  </div>

  </motion.div>
}

export default Social