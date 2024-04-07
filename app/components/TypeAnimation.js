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
      }}
    />
  );
};

export default TypeAnimation;
