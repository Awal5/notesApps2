import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../Context/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={
          locale === "id" ? "Cari Berdasarkan Nama..." : "Search By Name..."
        }
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </section>
  );
}

SearchBar.prototype = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
