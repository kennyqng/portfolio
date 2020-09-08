import React from "react";
import "./style.css";
import github from "../../Assets/github.png";
import webIcon from "../../Assets/web.png";

function Thumbnail(props) {
  return (
    <div className="banner">
      <div className="board">
        <div className="thumbnail">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img src={props.image} alt="thumbnail"></img>
          </a>
        </div>
        <div className="sidebar">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github icon"></img>
          </a>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img src={webIcon} alt="globe website icon"></img>
          </a>
        </div>
        <div className="bar">
          <p className="project-name">{props.name}</p>
        </div>
      </div>
      <div className="summary">
        <p className="description">{props.development}</p>
        <p className="description">{props.description}</p>
        <p className="description">{props.tech}</p>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <p>{props.github}</p>
        </a>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <p>{props.url}</p>
        </a>
      </div>
    </div>
  );
}

export default Thumbnail;
