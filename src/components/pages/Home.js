import React from "react";
// import profile from "../../Assets/img.JPG";
import profile from "../../Assets/logo.svg";

function Home() {
  return (
    <div>
      <div className="container bg-white border border-light pb-4">
        <h2 className="text-info py-2">About Me</h2>

        <div className="container border border-dark mb-4"></div>

        <div className="container">
          <img src={profile} className="float-left pr-3" alt="profile"></img>
          <small className="text-muted">
            Welcome to my page. My name is Kenny Nguyen. I am a graduate of The
            Coding Boot Camp at University of Irvine, Continuing Education. I
            have be trained in full stack web development. I have worked with
            html, css, Java Script, NodeJS, and React. I also have used
            libraries such as bootstrap, MySQL, and MongoDB. My past experience
            includes coding language Java and C++. Please visit my{" "}
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
      </div>
    </div>
  );
}

export default Home;
