import React from "react";
import "./style.css";

function CandyCard(props) {
  const {image, name, id, onClickImg } = props
  return (
    <div className="card">
      <div className="img-container" onClick={() => onClickImg(id)}>
        <img alt={name} src={image} />
      </div>
    </div>
  );
}

export default CandyCard;
