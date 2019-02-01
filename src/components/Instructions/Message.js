import React from "react";
import "./Message.css";

function Message(props) {
  return <h1 className="Message">{props.children}</h1>;
}

export default Message;
