import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h4>Logo</h4>
      <Link to="/addproduct">Add product</Link>
      <input placeholder="search for items" />
      <div className={styles.sign}>
        <p>signin</p>
        <p>signout</p>
      </div>
    </div>
  );
};

export default Navbar;
