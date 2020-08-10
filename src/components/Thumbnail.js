import React from "react";

function Wrapper(props) {
  return (
    <div>
      <div className="col-lg-6">
        <div className="container" id="box">
          <div className="container" id="project-box">
            <img src={props.image} className="img-fluid" alt="" />
            <a href={props.url} target="_blank" rel="noopener nofeferrer">
              <div className="container-fluid" id="project-name">
                {props.name}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
