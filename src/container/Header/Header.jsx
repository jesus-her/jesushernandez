import React from "react";
import "./Header.scss";
import images from "../../constants/images";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          {/*<div className="badge-cmp app__flex">*/}
          {/* <span>👋</span>*/}
          {/*    <div style={{ marginLeft: 20 }}>*/}
          {/*<h1 className="head-text">Hello, I am</h1>*/}
          <h1 className="head-text">
            Hi, <br /> I am Jesús,
          </h1>
          {/* <h1 className="head-text">I am Jesús,</h1>*/}
          <h1 className="head-text-highlight head-text">web & mobile</h1>
          <h1 className="head-text">developer</h1>
          {/*</div>*/}
          {/*    </div>*/}

          {/*  <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>*/}
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ y: [-150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          src={images.me}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.git, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default AppWrap(Header, "home");
