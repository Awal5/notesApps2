import React from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import PropTypes from "prop-types";

function NoteItemBody({ id, title, createdAt, body }) {
  return (
    <div className="note-item__body">
      <h2 className="note-item__title">
        <Link to={`notes/${id}`}>{title}</Link>
      </h2>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{parser(body)}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
