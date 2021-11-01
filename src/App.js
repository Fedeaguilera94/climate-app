import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import "./App.css";
import SearchBar from "./components/SearchBar";
import fetchCity from "./services/fetchCity";
import fetchCoords from "./services/fetchCoords.js";

import Card from "./components/Card";
import Cards from "./components/Cards";

function App() {
  const [data, setData] = useState([]);
  function onSearch(ciudad) {
    if (data.length > 2) {
      alert("no puedes agregar mas ciudades");
    } else {
      fetchCity(ciudad, setData);
    }
  }

  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchCoords(pos.coords.latitude, pos.coords.longitude, setData);
      });
  }, []);

  return (
    <div className="App">
      <Route path="/" render={() => <SearchBar onSearch={onSearch} />} />

      <div>
        {data.length > 0 ? (
          <>
            <Card
              primary
              max={data[data.length - 1].max}
              min={data[data.length - 1].min}
              name={data[data.length - 1].name}
              img={data[data.length - 1].img}
            />
            <Cards cities={data} onClose={handleOnClose} />
          </>
        ) : (
          <span
            style={{
              textAlign: "center",
              width: "70vw",
              marginTop: "1rem",
              fontSize: "2rem",
            }}
          >
            Agrega una nueva ciudad
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
