"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = ({ strings }) => {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
        cursor: "_",
        css: `
          color: #FFC83D; // Change this to the desired color code
        `,
      }}
    />
  );
};

export default TypeAnimation;
