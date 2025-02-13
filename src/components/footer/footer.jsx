import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const today = new Date();
  const thisYear = today.getFullYear();
  const socialLinks = [
    {
      href: "mailto:anamariamaldonado1994@gmail.com?subject=hi%20there!",
      alt: "Email",
      iconClass: "bi bi-envelope", // Icono de email de Bootstrap
      label: "anamariamaldonado1994@gmail.com",
    },
    {
      href: "https://github.com/acmv19",
      alt: "GitHub",
      iconClass: "bi bi-github", // Icono de GitHub de Bootstrap
    },
    {
      href: "https://www.facebook.com/anamaria.maldonadovazquez1",
      alt: "Facebook",
      iconClass: "bi bi-facebook", // Icono de Facebook de Bootstrap
    },
    {
      href: "https://www.instagram.com/anamariacmv/",
      alt: "Instagram",
      iconClass: "bi bi-instagram",
    },
  ];
  return (
    <footer className={styles.footer}>
      <p>&copy; Anamaria Maldonado {thisYear}</p>
    </footer>
  );
};

export default Footer;
