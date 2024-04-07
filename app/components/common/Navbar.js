"use client";
import Link from "next/link";
import styles from "@styles/Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="logo">
        <Link href="/">
          <span style={{ color: "yellow", fontSize: 25, fontWeight: "700" }}>
            {"<"}
          </span>
          <span style={{ color: "thistle", fontSize: 30, fontWeight: "700" }}>
            {"wrack"}
          </span>
          <span style={{ color: "yellow", fontSize: 25, fontWeight: "700" }}>
            {"/>"}
          </span>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/button1">_home</Link>
        <Link href="/button2">_projects</Link>
        <Link href="/button3">_blogs</Link>
        <Link href="/button4">_experiences</Link>
        <Link href="/button5">_skills</Link>

        <button className={styles.resumeBtn}>resume</button>
        <img
          src="/lightMode.png"
          alt="developerLogo"
          width="40"
          height="40"
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
