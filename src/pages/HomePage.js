import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import HomePageAction from "../components/HomePageAction";
import { getActiveNotes } from "../utils/network-data";
import LocaleContext from "../Context/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    async function getNotes() {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }
    }
    getNotes();
    setInitializing(false);
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((notes) => {
    return notes.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (initializing) {
    return <div className="spinner"></div>;
  }

  return (
    <section className="homepage">
      <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <p className="notes-list-empty">
          {locale === "id" ? "Catatan Kosong" : "Notes Empty"}
        </p>
      )}
      <HomePageAction />
    </section>
  );
}

export default HomePage;
