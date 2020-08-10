import React from "react";

function Wrapper(props) {
  return (
      <div className="col-lg-6">{props.children}</div>
  );
}

export default Wrapper;
