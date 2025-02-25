import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const today = new Date();
  const thisYear = today.getFullYear();
  const socialLinks = [
    {
      href: "mailto:anamariamaldonado1994@gmail.com?subject=hi%20there!",
      alt: "Email",
      iconClass: "bi bi-envelope",
      label: "anamariamaldonado1994@gmail.com",
    },
    {
      href: "https://github.com/acmv19",
      alt: "GitHub",
      iconClass: "bi bi-github",
    },
    {
      href: "https://www.facebook.com/anamaria.maldonadovazquez1",
      alt: "Facebook",
      iconClass: "bi bi-facebook",
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
      <div className="d-flex justify-content-center gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={link.alt}
          >
            <i className={link.iconClass}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
