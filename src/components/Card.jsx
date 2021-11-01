import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Card(props) {
  const { max, min, name, img, onClose, primary } = props;
  // acá va tu código
  return (
    <div>
      <span>
        {name}
        {!primary && (
          <button onClick={onClose}>
            <IoCloseCircleOutline />
          </button>
        )}
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Icono del clima"
      />
      <div>
        <Temp label="Min" temp={min} />
        <Temp label="Max" temp={max} />
      </div>
    </div>
  );
}

// Mala practica ALERT
// Esto debería estar en un archivo aparte
function Temp({ label, temp }) {
  return (
    <div>
      <span>{label}</span>
      <span>{temp}º</span>
    </div>
  );
}
