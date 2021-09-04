import React from "react";
import "./Expand.css";

function Expand(props) {

  return (
    <div className="expand">
      <button onClick={props.onClick} type="button" className="expand__button">Ещё</button>
    </div>
  );
}

export default Expand;
