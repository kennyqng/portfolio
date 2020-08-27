import React from "react";
import "./style.css";

function Thumbnail (props) {
  return (
    <div>
        <div className="project" >
          <img src={props.image} alt="" />
          <a href={props.url} target="_blank" rel="noopener nofeferrer">
            <div className="container-fluid" id="project-name">
              {props.name}
            </div>
          </a>
        </div>
    </div>
  );
}

export default Thumbnail;
