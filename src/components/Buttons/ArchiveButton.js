import React from "react";
import { MdOutlineArchive } from "react-icons/md";
import PropTypes from "prop-types";

function ArchiveButton({ id, onArchive }) {
  return (
    <button
      className="action"
      onClick={() => {
        onArchive(id);
      }}
      title="Arsipkan"
    >
      <MdOutlineArchive />
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
