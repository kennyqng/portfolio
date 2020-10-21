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
              Hello, I'm Kenny Nguyen. A full stack web developer with a passion for creativity and to solve problems through technology. I received a web development certification from University of California, Irvine. A professional background in social services which included experiences in customer service, team projects, and supports to colleagues.
              <br></br>
              I have worked with HTML5, CSS, Java Script, NodeJS,
              jQuery, Bootstrap and ReactJS. I have also used database
              programs such as MySQL and MongoDB. In the past, I've also experience in other coding languages, Java and C++.
              <br></br>
              A self motivated person, a great communicator, and team player. A developer that will provide an intuitive user experience and a refined UI using the latest technologies.
              <br></br>
              <br></br>
              Please visit my{" "}
              <Link className="link" to="/projects">
                portfolio
              </Link>{" "}
              to see my past work. Feel free to{" "}
              <Link className="link" to="contact">
                contact
              </Link>{" "}
              me.
            </small>
          </div>
          <br></br>
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
