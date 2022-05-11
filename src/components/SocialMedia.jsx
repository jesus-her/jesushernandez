import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/jesus-her" target="_blank">
      <BsGithub />
    </a>
    <a
      href="https://www.youtube.com/channel/UCt2zesKgsx9AGe-qXFcWbOg"
      target="_blank"
    >
      <FaYoutube />
    </a>
    <a href="https://www.instagram.com/jesus_.hn/" target="_blank">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
