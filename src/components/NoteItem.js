import React from "react";
import NoteItemBody from "./NoteItemBody";
import parser from "html-react-parser";
import PropTypes from "prop-types";

function NoteItem({ id, title, createdAt, body }) {
  return (
    <article className="note-item">
      <NoteItemBody
        id={id}
        title={title}
        createdAt={createdAt}
        body={parser(body)}
      />
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
