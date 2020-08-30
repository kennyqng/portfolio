import React from "react";
import "./style.css";

function Thumbnail(props) {
  return (
    <div>
      <div className="project">
        <a href={props.url} target="_blank" rel="noopener nofeferrer">
          <img src={props.image} alt="" />
        </a>
        <div className="container-fluid" id="project-name">
          <p>
            {props.name} 
            <a href={props.github} target="_blank" rel="noopener nofeferrer">
            &nbsp;[GitHub]
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
