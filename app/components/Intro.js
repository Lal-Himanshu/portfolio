import React from "react";
import styles from "@styles/main.module.css";
function Intro() {
  return (
    <div className={styles.box}>
      <p>Hello 👋</p>
      <p>
        I'm WRACK{" "}
        <a className={styles.nameSmall}>
          aka <span>himanshu_lal</span>
        </a>
      </p>
      <p></p>
      <p className={styles.platforms}>
        I build things for <span style={{ color: "#FFC83D" }}> {text}</span>
        <Cursor cursorStyle={"_"} />
      </p>
      <TypeAnimation strings={roles} />
    </div>
  );
}

export default Intro;
