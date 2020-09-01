import React from "react";
import "./style.css";
import github from "../../Assets/github.png";
import webIcon from "../../Assets/web.png";

function Thumbnail(props) {
  return (
    <div>
      <div className="board">
        <div className="thumbnail">
        <a href={props.url} target="_blank" rel="noopener nofeferrer">
          <img src={props.image}></img>
          </a>
        </div>
        <div className="sidebar">
          <a href={props.github} target="_blank" rel="noopener nofeferrer">
            <img src={github}></img>
          </a>
          <a href={props.url} target="_blank" rel="noopener nofeferrer">
            <img src={webIcon}></img>
          </a>
        </div>
        <div className="bar">
          <p className="project-name">{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
