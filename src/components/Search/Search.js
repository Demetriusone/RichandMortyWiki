import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber, search, pageNumber }) => {
  let inputText = document.getElementById("search");
  const sendPost = (e) => {
    e.preventDefault();
    setSearch(inputText.value);
    inputText.value = "";
  };

  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(event) => {
          setPageNumber(1);
        }}
        type="text"
        id="search"
        className={`${styles.input} `}
        placeholder="Search for character"
        type="text"
      />
      <button
        onClick={sendPost}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
