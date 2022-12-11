import { React, useContext } from "react";
import { AppContext } from "../../store/AppContext";
import BackgroundPallet from "../BackgroundPallet/BackgroundPallet";
import "./FormBackground.css";
function FormBackground() {
  const { backgrounds, handleBackgroundClick } = useContext(AppContext);
  return (
    <div className="form--background">
      {backgrounds.map((bg) => (
        <BackgroundPallet
          key={bg.id}
          color={bg.id}
          onClick={handleBackgroundClick}
          selected={bg.selected}
        />
      ))}
    </div>
  );
}

FormBackground.propTypes = {};

export default FormBackground;
