import React from "react";
import "./Score.css";

function Score(props) {
  return <h1 className="Score">{props.children}</h1>;
}

export default Score;
