import React from "react";

import IconGithub from "../assets/svg/github";
import IconLinkedIn from "../assets/svg/in";
import IconTwitter from "../assets/svg/twitter";
import IconInstagram from "../assets/svg/instagram";
import IconCodepen from "../assets/svg/codepen";
import IconCodewars from "../assets/svg/codewars";

const SocialIconLinks = ({ iconClasses }) => {
  return (
    <>
      <a
        href="https://github.com/lal-himanshu"
        target="_blank"
        rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a
        href="https://www.linkedin.com/in/himanshulal4/"
        target="_blank"
        rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <IconTwitter classes={`${iconClasses}`} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <IconCodepen classes={`${iconClasses}`} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <IconCodewars classes={`${iconClasses}`} />
      </a>
    </>
  );
};

export default SocialIconLinks;
