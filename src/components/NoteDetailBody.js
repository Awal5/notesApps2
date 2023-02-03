import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import parser from "html-react-parser";

function NoteDetailBody({ title, createdAt, body }) {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parser(body)}</div>
    </>
  );
}

NoteDetailBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetailBody;
