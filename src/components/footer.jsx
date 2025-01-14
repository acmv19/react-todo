import React from "react";

const Footer = () => {
  const today = new Date();
  const thisYear = today.getFullYear();

  return (
    <footer style={{ textAlign: "center", padding: "10px 0" }}>
      <p>&copy; Anamaria Maldonado {thisYear}</p>
    </footer>
  );
};

export default Footer;
