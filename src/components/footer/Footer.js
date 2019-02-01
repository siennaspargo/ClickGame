import React from "react";
import "./FooterC.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Footer() {
  return (
    <footer className="footer">
      <h1>a simple app created with React</h1>
      <h1><a href="https://github.com/siennaspargo">Developer's GitHub</a></h1>
    </footer>
  );
}

export default Footer;
