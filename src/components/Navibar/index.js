import React from "react";
import { Link } from "react-router-dom";
import {Navbar} from "react-bootstrap"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navibar() {
  return (
    <div className="navigator">
      <Navbar fixed = "top" expand = "lg" bg ="light" className="ml-auto">
        <span id = "span1">Jack Long</span>
            
        <Link className="aTag" to="/about">
          About
        </Link>
            
        <Link className="aTag" to="/portfolio">
          Portfolio
        </Link>

        <Link className="aTag" to="/contact">
          Contact
        </Link>

        <Link className="aTag" to="#top" onClick={() => window.scrollTo(0, 0)}>
          Top
        </Link>
      </Navbar>
    </div>
  );
}

export default Navibar;
