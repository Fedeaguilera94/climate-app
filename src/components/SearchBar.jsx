import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleOnSearch = () => {
    onSearch(search);
    setSearch("");
  };
  return (
    <div>
      <input
        placeholder="Agrega una ciudad..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleOnSearch}></button>
    </div>
  );
}
