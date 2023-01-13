import React from "react";

const BtnSecondary = ({title}) => {
  return (
    <button className="btn-secondary">
      <span className="btn-secondary__span">{title}</span>
    </button>
  );
};

export default BtnSecondary;
