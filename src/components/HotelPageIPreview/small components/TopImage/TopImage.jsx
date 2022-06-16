import React from "react";
import styles from "./styles.module.css";

const TopImage = ({ imgaeTop }) => {
  return (
    <div className={styles.imageBox}>
      {imgaeTop &&
        imgaeTop.map((el, id) => (
          <div key={id}>
            <img src={el.img} alt="img" />
          </div>
        ))}
    </div>
  );
};

export default TopImage;
