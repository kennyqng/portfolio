import React from "react";
import profile from "../../Assets/profile.JPG";

function Home() {
  return (
    <div>
      <div className="container bg-white border border-light pb-4 about">
        <h2 className="text-info py-2">About Me</h2>

        <div className="container border border-dark mb-4 "></div>

        <div className="container">
          <img src={profile} className="float-left pr-3" alt="profile"></img>
          <small className="text-muted">
            Welcome to my page. My name is Kenny Nguyen. I am a graduate of The
            Coding Boot Camp at University of California Irvine. I have been
            trained in full stack web development. I have worked with HTML5,
            CSS, Java Script, NodeJS, jQuery, Bootstrap and ReactJS. I also have
            used database languages, SQL and noSQL, through programs such as
            MySQL and MongoDB. My past experience includes other coding
            language, Java and C++. Please visit my{" "}
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
