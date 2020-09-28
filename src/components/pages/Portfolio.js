import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import searchImg from "../../Assets/search.svg";
import cookImg from "../../Assets/cook.svg";
import sleepImg from "../../Assets/sleep.svg";
import directoryImg from "../../Assets/directory.svg";
import weatherImg from "../../Assets/weather.svg";

function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "ZTrak",
      thumbnail: sleepImg,
      url: "https://ztrak.herokuapp.com/",
      github: "https://github.com/kennyqng/Ztrak",
      development: "Full-stack Development",
      description:"Sleep tracker to log sleep time, wake time, and hours slept.",
      tech: "MongoDB, Express, ReactJS, Node JS, HTML, CSS, CanvasJS"
    },
    {
      id: 2,
      name: "Pantry Chef",
      thumbnail: cookImg,
      url: "https://pantry-chef-kenny.herokuapp.com/",
      github: "https://github.com/kennyqng/Pantry-Chef",
      development: "Full-stack Development",
      description:"Website that provides recipes for dishes based on ingredients search.",
      tech: "HTML, Node JS, CSS, Materialize UI, Handlebars, mySQL"
    },
    {
      id: 3,
      name: "Too Long; Did Search",
      thumbnail: searchImg,
      url: "https://kennyqng.github.io/TLDS/",
      github: "https://github.com/kennyqng/TLDS",
      development: "Front-end Development",
      description:"An encyclopedia search engine that provides a short summary and visual so that the user gets a quick understanding and continues on with their day.",
      tech: "Bootstrap, HTML, JS, CSS"
    },
    {
      id: 4,
      name: "Weather App",
      thumbnail: weatherImg,
      url: "https://kennyqng.github.io/Weather-Dashboard/",
      github: "https://github.com/kennyqng/Weather-Dashboard",
      development: "Front-end Development",
      description:"Search for current weather information and 5 days forecast for cities around the world.",
      tech: "HTML, Node JS, CSS"
    },
    {
      id: 5,
      name: "Employee Directory",
      thumbnail: directoryImg,
      url: "https://kennydirectoryreact.herokuapp.com/",
      github: "https://github.com/kennyqng/employeeDirectory",
      development: "Back-end Development",
      description:"Sort and display employee information from a database.",
      tech: "SQL, Express, HTML, Node JS, CSS"
    }
  ];
  return (
    <div className="container bg-white border border-light pb-4 outline">
      <h2 className="text-info py-2">Portfolio</h2>
      <div className="container border border-dark mb-4 "></div>
      <div className="wrapper">
        {projects.map(project => (
          <Thumbnail
            key={project.id}
            url={project.url}
            image={project.thumbnail}
            name={project.name}
            github={project.github}
            development={project.development}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
