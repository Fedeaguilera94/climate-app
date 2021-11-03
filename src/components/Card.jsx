import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import styles from "./Card.module.css";

export default function Card(props) {
  const { max, min, name, img, onClose, primary } = props;

  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
      <span className={styles.name}>
        {name}
        {!primary && (
          <button className={styles.btn} onClick={onClose}>
            <VscChromeClose />
          </button>
        )}
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Icono del clima"
      />
      <div className={styles.temps}>
        <Temp label="Min" temp={min} />
        <Temp label="Max" temp={max} />
      </div>
    </div>
  );
}

function Temp({ label, temp }) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}º</span>
    </div>
  );
}
