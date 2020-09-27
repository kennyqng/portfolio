import React from "react";
import profile from "../../Assets/profile.JPG";
import { Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container bg-white border border-light pb-4 outline about">
        <h2 className="text-info py-2">About Me</h2>

        <div className="container border border-dark mb-4 "></div>

        <div className="container">
          <div className="bio">
            <img src={profile} className="float-left pr-3" alt="profile"></img>
            <small className="text-muted">
              Hello, my name is Kenny Nguyen. I am full stack web developer. I
              am a graduate of The Coding Boot Camp at University of California
              Irvine. I have worked with HTML5, CSS, Java Script, NodeJS,
              jQuery, Bootstrap and ReactJS. I also have used database
              languages, SQL and noSQL, through programs such as MySQL and
              MongoDB. My past experience includes other coding language, Java
              and C++.
              <br></br>
              Please visit my{" "}
              <Link className="link" to="/projects">
                portfolio
              </Link>{" "}
              to see my past work. Feel free to{" "}
              <Link className="link" to="contact">
                contact
              </Link>{" "}
              me. Thank you.
            </small>
          </div>
          <div className="tech-skills">
            Tech Skills&nbsp;<br></br>
            <i className="fab fa-html5"></i>&nbsp;&nbsp;
            <i className="fab fa-css3-alt"></i>&nbsp;&nbsp;
            <i className="fab fa-js-square"></i>&nbsp; &nbsp;
            <i className="fab fa-node-js"></i>&nbsp;&nbsp;
            <i className="fab fa-react"></i>&nbsp;&nbsp;
            <i className="fab fa-npm"></i>&nbsp;&nbsp;
          </div>
          <small className="text">Front-end: </small>
          <small className="text-muted">
            Javascript, ReactJS, HTML, CSS, jQuery, Bootstrap, Handlebars
          </small>
          <br></br>
          <small className="text">Back-end: </small>
          <small className="text-muted">
            mySQL, MongoDB, Express.js, Node JS
          </small>
          <br></br>
          <small className="text">Applications: </small>
          <small className="text-muted">
            Visual Studio Code, Git version control, Heroku, Figma wireframe
          </small>
        </div>
      </div>
    </div>
  );
}

export default Home;
