import React from "react";
import { BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

function UnarchiveButton({ id, onUnarchive }) {
  const navigate = useNavigate();
  return (
    <button
      className="action"
      onClick={() => {
        onUnarchive(id);
        navigate("/");
      }}
      title="Aktifkan"
    >
      <BiArchiveOut />
    </button>
  );
}

UnarchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default UnarchiveButton;
