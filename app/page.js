"use client";
import React from "react";
import ParticleBackground from "./components/ParticleBackground";
import TypeAnimation from "./components/TypeAnimation";
import Typewriter from "typewriter-effect";
import Navbar from "./components/common/Navbar";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import styles from "@styles/main.module.css";
import devevloperImg from "../public/developerImg.png";
import PlatformTypeAnimation from "./components/PlatformTypeAnimation";
export default function Home() {
  const roles = [
    "DSA Enthusiast",
    "Mobile App Developer",
    "Web Developer",
    "Software Engineer",
    "Curious Learner",
  ];
  console.log(
    "renderinggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
  );
  return (
    <div className={styles.main}>
      <ParticleBackground />
      <Navbar />

      <main>
        <section className={styles.homeSec}>
          <div className={styles.box}>
            <p>Hello 👋</p>
            <p>
              I'm WRACK{" "}
              <a className={styles.nameSmall}>
                aka <span>himanshu_lal</span>
              </a>
            </p>
            <PlatformTypeAnimation />
            <TypeAnimation strings={roles} />
          </div>
          <div>
            <img
              src="/developerImg.png"
              alt="developerLogo"
              width="500"
              height="500"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
