import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <>
      <button type="button" className={styles.menuButton} onClick={toggleMenu}>
        {menuVisible ? " X" : "Menu"}
      </button>
      <div className={`${styles.sidebar} ${menuVisible ? styles.show : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          ✖
        </button>

        <ul className={styles.navLinks}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/todo" onClick={toggleMenu}>
              ToDo List
            </Link>
          </li>
          <li>
            <Link to="/new" onClick={toggleMenu}>
              New
            </Link>
          </li>
          <li>
            <Link to="/Motivation" onClick={toggleMenu}>
              Motivation Video
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
