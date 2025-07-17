import React, { useState } from "react";
import styles from "./NavTabs.module.css";

const tabs = [
  "AREA DASHBOARD",
  "DEPLOYMENT",
  "ON THE JOB TRAINING",
  "SKILL MATRIX",
  "REPORTS"
];

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("AREA DASHBOARD");

  return (
    <div className={styles.navContainer}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.navItem} ${activeTab === tab ? styles.active : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
