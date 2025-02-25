import React from "react";
import styles from "./MotivationVideo.module.css";

const MotivationVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <h2 className={styles.title}>
        Fuel Your Passion: Motivation for Programmers!! 🎉
      </h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dWQydgGBOEE"
        title="Motivation Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MotivationVideo;
