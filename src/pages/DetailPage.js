import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import {
  deleteNote,
  archiveNote,
  unarchiveNote,
  getNote,
} from "../utils/network-data";
import NotFound from "../components/NotFound";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState("");

  useEffect(() => {
    getNote(id).then((data) => {
      setNote(data.data);
    });
  }, [id]);

  async function onArchiveHandler(id) {
    await archiveNote(id);
    navigate("/archives");
  }

  async function onUnarchiveHandler(id) {
    await unarchiveNote(id);
    navigate("/archives");
  }

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate("/");
  }
  if (!note) {
    return <NotFound />;
  }

  return (
    <section>
      <NoteDetail
        id={id}
        onArchive={onArchiveHandler}
        onUnarchive={onUnarchiveHandler}
        onDelete={onDeleteHandler}
        {...note}
      />
    </section>
  );
}

export default DetailPage;
