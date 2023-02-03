import React from "react";
import { FiTrash } from "react-icons/fi";
import PropTypes from "prop-types";

function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="action"
      title="Hapus"
      onClick={() => {
        onDelete(id);
      }}
    >
      <FiTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
