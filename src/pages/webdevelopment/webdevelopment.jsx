import React from "react";
import './webdevelopment.css'
import Header from "../../components/header/header";
import mine from '../../assets/mine.jpg'
import {Link} from 'react-router-dom'
import Footer from "../../components/footer/footer";
import Recentworks from "../recentworks/recentworks";
import { useRef } from "react";
import { useEffect } from "react";
import { motion, useInView, useAnimation, easeInOut, } from "framer-motion";

function Webdev() {
  const ref = useRef(null);
  const isInview = useInView(ref);

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
      hidden: { opacity: 0, y: 400 },
      visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.3 }}
      exit={easeInOut}>
    <Header />
    <div className="dev_me_info">
      <div className="info_title">
        <div className="my_self_">Hi, my name is Lourdhu Raju</div>
        <div className="react_">I’m a React.js Developer</div>
        <br />
        <Link to="/about" className="about_" >
        FIND OUT MORE
        </Link>
      </div>     
      <div className="my_pic">
        <img src={mine} width={700} height={500} alt="" />
      </div>
    </div>

    <div className="why_me">
      <hr />
      <div>WHY ME ?</div>
      <p>

Web development, and why it's a fitting path for me, can be articulated in numerous ways. Firstly, web development is an ever-evolving field, demanding constant learning and adaptation, and my natural curiosity and willingness to explore new technologies align perfectly with this aspect. My attention to detail ensures that my code is clean and efficient, resulting in exceptional user experiences. Moreover, my problem-solving skills come into play when debugging and troubleshooting, crucial in the web development world.

Furthermore, my creativity shines when designing visually appealing websites and crafting intuitive user interfaces. My strong communication skills enable me to work seamlessly with cross-functional teams, ensuring that my web projects meet both technical and business objectives. My passion for user-centric design ensures that I prioritize user needs and create web solutions that resonate with the target audience.

My commitment to continuous improvement and staying up-to-date with the latest web development trends positions me as a valuable asset in a field that's constantly evolving. My ability to adapt to new tools and programming languages equips me with versatility, making me capable of tackling a wide range of projects.

In essence, web development is not just a career choice; it's a canvas where my skills, passion, and potential converge to create impactful and engaging online experiences. My unique qualities make me not only a proficient web developer but also someone who can leave a lasting mark in the digital world.</p>
    </div>

    <div className="why_react_">
      <hr />
      <div>WHY CHOOSE REACT ?</div>
      <p>
        
React.js is favored for web development due to its versatility, efficiency, and robust ecosystem. It employs a component-based architecture, making code modular and maintainable, which enhances collaboration among developers. React's virtual DOM optimizes rendering by minimizing actual updates to the browser, resulting in exceptional performance and responsiveness. This feature is particularly vital for complex, data-driven applications.

React enjoys widespread community support, with a vast array of libraries and tools available, streamlining development tasks. Its flexibility allows for server-side rendering and mobile app development through React Native, making it a comprehensive solution for various platforms. With regular updates and a large user base, React.js remains at the forefront of front-end development, ensuring long-term viability and community-driven innovation.
      </p>
    </div>
    <Recentworks/>
    <Footer/>

  </motion.div>
  
}

export default Webdev