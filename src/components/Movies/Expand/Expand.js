import React from "react";
import "./Expand.css";
import {
  MORE_LABEL
} from "../../../utils/textConstants";

function Expand(props) {

  return (
    <div className="expand">
      <button onClick={props.onClick} type="button" className="expand__button">{MORE_LABEL}</button>
    </div>
  );
}

export default Expand;
