import React from "react";
import DeleteButton from "./Buttons/DeleteButton";
import ArchiveButton from "./Buttons/ArchiveButton";
import PropTypes from "prop-types";
import UnarchiveButton from "./Buttons/UnarchivedButton";

function NoteDetailAction({ id, archived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="detail-page__action">
      {archived === true ? (
        <UnarchiveButton
          id={id}
          archived={archived}
          onUnarchive={onUnarchive}
        />
      ) : (
        <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
      )}
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteDetailAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteDetailAction;
