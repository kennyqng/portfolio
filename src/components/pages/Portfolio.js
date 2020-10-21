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
      description:"To monitor your sleep habits to aid you in achieving better health. ZTrak logs your sleep time, wake time, and amount slept. Your data is summarized in your log history and displayed on a chart. Sign up for your own account or simply use the demo account: [ztrak@herokuapp.com]  password: [abc123].",
      tech: "ReactJS, MongoDB, Express, CanvasJS, Node JS, HTML, CSS"
    },
    {
      id: 2,
      name: "Pantry Chef",
      thumbnail: cookImg,
      url: "https://pantry-chef-kenny.herokuapp.com/",
      github: "https://github.com/kennyqng/Pantry-Chef",
      development: "Full-stack Development",
      description:"Pantry Chef provides you recipes for dishes based on ingredients search. You can also search by dish names from a database over 5,000 recipes shared on the internet.",
      tech: "Handlebars, mySQL, Materialize UI, HTML, Node JS, CSS,"
    },
    {
      id: 3,
      name: "Too Long; Did Search",
      thumbnail: searchImg,
      url: "https://kennyqng.github.io/TLDS/",
      github: "https://github.com/kennyqng/TLDS",
      development: "Front-end Development",
      description:"An encyclopedia search engine that provides a short summary and visual so that the user gets a quick understanding and continues on with their day.",
      tech: "API, Bootstrap, HTML, JS, CSS"
    },
    {
      id: 4,
      name: "Weather App",
      thumbnail: weatherImg,
      url: "https://kennyqng.github.io/Weather-Dashboard/",
      github: "https://github.com/kennyqng/Weather-Dashboard",
      development: "Front-end Development",
      description:"Search for current weather information and 5 days forecast for cities around the world.",
      tech: "API, HTML, Node JS, CSS"
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
