import React from "react";
import styles from "./SortButton.module.css";

const SortControl = ({ sortOrder, toggleSortOrder, sortBy, toggleSortBy }) => {
  return (
    <div className={styles.sortControlContainer}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={sortOrder === "asc"}
          onChange={toggleSortOrder}
        />
        <span className={styles.slider}></span>
      </label>
      <span className={styles.orderText}>
        Order: {sortOrder === "asc" ? "Ascending" : "Descending"}
      </span>

      <button className={styles.sortControlButton} onClick={toggleSortBy}>
        Sort by: {sortBy === "title" ? "Title" : "Date"}
      </button>
    </div>
  );
};

export default SortControl;
