import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

function AddButton() {
  return (
    <Link to="/add" className="action">
      <AiOutlinePlus />
    </Link>
  );
}

export default AddButton;
