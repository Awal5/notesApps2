import React, { useState, useEffect, useContext } from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import LocaleContext from "../Context/LocaleContext";

function ArchivePageWrapper() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [initializing, setInitializing] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    async function getNotes() {
      const { error, data } = await getArchivedNotes();
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
    return <div className="spinner"> </div>;
  }
  return (
    <section className="archive-page">
      <h2>{locale === "id" ? "Catatan Arsip" : "Archive Notes"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <p className="notes-list-empty">
          {locale === "id" ? "Catatan Arsip Kosong" : "Archive Notes Empty"}
        </p>
      )}
    </section>
  );
}

export default ArchivePageWrapper;
