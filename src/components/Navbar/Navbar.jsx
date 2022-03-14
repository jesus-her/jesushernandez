import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import ToggleButton from "../ToggleButton/ToggleButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [actualTheme, setActualTheme] = useState(
    document.documentElement.classList.contains("light")
  );
  // toggle to switch classes between .light and .dark
  // if no class is present (initial state), then assume current state based on system color scheme
  // if system color scheme is not supported, then assume current state is light
  function toggleDarkMode() {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.add("dark");
      }
    }
    console.log("aja", document.documentElement.classList);
    console.log(document.documentElement.classList.value);
    setActualTheme(document.documentElement.classList.value);
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <ToggleButton onChange={toggleDarkMode} />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item, index) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [-300, 0] }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
