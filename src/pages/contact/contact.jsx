import React from "react";
import Header from "../../components/header/header";
import './contact.css'
import Social from "../../pages/social/social";
import { useRef } from "react";
import { useEffect} from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";
import Background from "../../components/background/background";

function Contact() {
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



  return <motion.div className="contact_page"
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
    <div className="contact_circle">
      <div className="contact_mesg">Get in touch and let’s do <br />something <small>(great)</small> together!</div>
    </div>
    <hr />
    <div>
      CONTACT ME
    </div>
    <div className="info_me">
      <div className="inf">Feel free to drop me a message <br /> if you have  any       questions.</div>
      <div className="inf">
        Hit me up at: <a className="link_m" href="https://mail.google.com/mail/u/0/#inbox">b.lourdhuraju1234@gmail.com</a>
      </div>
    </div>
    <Background/>
    <Social/>

    
  </motion.div>
}

export default Contact