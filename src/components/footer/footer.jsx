import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  const today = new Date();
  const thisYear = today.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; Anamaria Maldonado {thisYear}</p>
    </footer>
  );
};

export default Footer;
