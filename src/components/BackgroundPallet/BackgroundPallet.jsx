import { React, useState } from "react";
import PropTypes from "prop-types";
import "./BackgroundPallet.css";
function BackgroundPallet({ color, onClick, selected }) {
  return (
    <div
      className="pallet"
      style={{
        backgroundColor: color,
        border: selected ? "2px solid #000" : "none",
      }}
      onClick={() => onClick(color)}
    ></div>
  );
}

BackgroundPallet.propTypes = {};

export default BackgroundPallet;
