import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((x) => {
      let { name, id, image, location, status } = x;
      return (
        <div key={id} className="col-md-4 position-relative">
          <div className={styles.cards}>
            <img src={image} alt="img" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4"> {name}</div>
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
            <div
              className={`${styles.badge} badge bg-danger position-absolute`}
            >
              {status}
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No characters found";
  }
  return <> {display}</>;
};

export default Cards;
