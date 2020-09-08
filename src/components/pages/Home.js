import React from "react";
import profile from "../../Assets/profile.JPG";

function Home() {
  return (
    <div>
      <div className="container bg-white border border-light pb-4 about">
        <h2 className="text-info py-2">About Me</h2>

        <div className="container border border-dark mb-4 "></div>

        <div className="container">
          <div className="bio">
          <img src={profile} className="float-left pr-3" alt="profile"></img>
          <small className="text-muted">
            Welcome to my page. My name is Kenny Nguyen. I am full stack web
            developer. I am a graduate of The Coding Boot Camp at University of
            California Irvine. I have worked with HTML5, CSS, Java Script,
            NodeJS, jQuery, Bootstrap and ReactJS. I also have used database
            languages, SQL and noSQL, through programs such as MySQL and
            MongoDB. My past experience includes other coding language, Java and
            C++. Please visit my{" "}
            <a className="link" href="/portfolio">
              portfolio{" "}
            </a>
            to see my past work. Feel free to{" "}
            <a className="link" href="/contact">
              contact{" "}
            </a>{" "}
            me. Have a wonderful day!
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
          <small className="text">Languages: </small>
          <small className="text-muted">
            Javascript, HTML, CSS, Javascript, Node JS, SQL, noSQL
          </small>
          <br></br>
          <small className="text">Libraries: </small>
          <small className="text-muted">
            ReactJS, Bootstrap, Handlebars, JQuery, Canvas JS
          </small>
          <br></br>
          <small className="text">Applications: </small>
          <small className="text-muted">
            Visual Studio Code, MySQL, MongoDB, Robo 3T, Git version control,
            Heroku, Figma wireframe
          </small>
        </div>
      </div>
    </div>
  );
}

export default Home;
