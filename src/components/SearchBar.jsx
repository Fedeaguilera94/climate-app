import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleOnSearch = () => {
    onSearch(search);
    setSearch("");
  };
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        placeholder="Agregar una ciudad..."
        autoComplete="off"
        value={search}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleOnSearch();
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={styles.btn} onClick={handleOnSearch}>
        <AiOutlineSearch />
      </button>
    </div>
  );
}
