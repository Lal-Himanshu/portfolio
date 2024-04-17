"use client";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="logo">
        <Link href="/">
          <img
            src={"signature.png"}
            width="180px"
            height="180px"
            alt="Dynamic Image"
          />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/button1">Home</Link>
        <Link href="/button2">Projects</Link>
        <Link href="/button3">Blogs</Link>
        <Link href="/button4">Experiences</Link>
        <Link href="/button5">Skills</Link>

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
