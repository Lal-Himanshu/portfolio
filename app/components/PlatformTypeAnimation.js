import React from "react";
import styles from "@styles/main.module.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
function PlatformTypeAnimation() {
  const [text] = useTypewriter({
    words: ["web", "mobile"],
    loop: {},
    typeSpeed: 60,
  });
  return (
    <p className={styles.platforms}>
      I build things for <span style={{ color: "#FFC83D" }}> {text}</span>
      <Cursor cursorStyle={"_"} />
    </p>
  );
}

export default PlatformTypeAnimation;
