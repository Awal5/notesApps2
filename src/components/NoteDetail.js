import React from "react";
import PropTypes from "prop-types";
import NoteDetailAction from "./NoteDetailAction";
import { showFormattedDate } from "../utils";
import parser from "html-react-parser";
import NoteDetailBody from "./NoteDetailBody";

function NoteDetail({
  id,
  title,
  createdAt,
  body,
  archived,
  onArchive,
  onUnarchive,
  onDelete,
}) {
  return (
    <section className="detail-page">
      <NoteDetailBody
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={parser(body)}
      />
      <NoteDetailAction
        id={id}
        archived={archived}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        onDelete={onDelete}
      />
    </section>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
