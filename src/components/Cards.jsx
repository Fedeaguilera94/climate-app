import React from "react";
import Card from "./Card";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {cities.map((city) => (
        <Card
          key={city.id}
          name={city.name}
          min={city.min}
          max={city.max}
          img={city.img}
          onClose={() => onClose(city.id)}
        />
      ))}
    </div>
  );
}
