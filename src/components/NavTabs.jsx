import React from "react";
import { Link, useParams, useLocation } from 'react-router-dom';
import styles from "./NavTabs.module.css";

const tabs = [
  { name: "AREA DASHBOARD", path: "" },
  { name: "DEPLOYMENT", path: "deployment" },
  { name: "ON THE JOB TRAINING", path: "training" },
  { name: "SKILL MATRIX", path: "skills" },
  { name: "REPORTS", path: "reports" }
];

const NavTabs = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div className={styles.navContainer}>
      {tabs.map((tab) => {
        const fullPath = `/operator/${id}${tab.path ? `/${tab.path}` : ""}`;

        const isActive = tab.path === ""
          ? location.pathname === `/operator/${id}` // exact match for AREA DASHBOARD
          : location.pathname.startsWith(fullPath); // match other tab paths

        return (
          <Link
            key={tab.name}
            to={fullPath}
            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavTabs;
