import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>Welcome to the Home Page</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">ToDo List</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
