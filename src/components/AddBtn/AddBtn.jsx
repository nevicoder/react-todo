import { React, useContext } from "react";
import { AppContext } from "../../store/AppContext";

import "./AddBtn.css";

function AddBtn(props) {
  const context = useContext(AppContext);
  return (
    <div className="btn--group">
      <button className="btn btn--add" onClick={context.createTodo}>
        +
      </button>
      <button className="btn btn--del" onClick={context.deleteTodos}>
        -
      </button>
    </div>
  );
}

AddBtn.propTypes = {};

export default AddBtn;
