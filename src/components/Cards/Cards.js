import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { name, id, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.cards} d-flex justify-content-center flex-column`}
          >
            <img src={image} alt="img" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4"> {name}</div>
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
            {(() => {
              if (status === "Dead") {
                return (
                  <div
                    className={`${styles.badge} badge bg-danger position-absolute`}
                  >
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div
                    className={`${styles.badge} badge bg-success position-absolute`}
                  >
                    {status}
                  </div>
                );
              } else {
              }
              return (
                <div
                  className={`${styles.badge} badge bg-secondary position-absolute`}
                >
                  {status}
                </div>
              );
            })()}
          </div>
        </Link>
      );
    });
  } else {
    display = "No characters found";
  }
  return <> {display}</>;
};

export default Cards;
