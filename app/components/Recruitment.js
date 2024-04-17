"use client";
import React from "react";
import styles from "../styles/Recruitment.module.css";

const Recruitment = () => {
  return (
    <div className={styles.recruitmentNotifier}>
      <p className={styles.title}>Recruitment Status</p>
      <span className={styles.notificationStatus}></span>
      Looking for a Job
    </div>
  );
};

export default Recruitment;
