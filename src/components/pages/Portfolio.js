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
      name: "Too Long; Did Search",
      thumbnail: searchImg,
      url: "https://kennyqng.github.io/project-01/",
      github: "https://github.com/kennyqng/project-01"
    },
    {
      name: "Pantry Chef",
      thumbnail: cookImg,
      url: "https://pantry-chef-kenny.herokuapp.com/",
      github: "https://github.com/kennyqng/project2"
    },
    {
      name: "ZTrak",
      thumbnail: sleepImg,
      url: "https://ztrak.herokuapp.com/",
      github: "https://github.com/kennyqng/project3"
    },
    {
      name: "Weather App",
      thumbnail: weatherImg,
      url: "https://kennyqng.github.io/Weather-Dashboard/",
      github: "https://github.com/kennyqng/Weather-Dashboard"
    },
    {
      name: "Employee Directory",
      thumbnail: directoryImg,
      url: "https://kennydirectoryreact.herokuapp.com/",
      github: "https://github.com/kennyqng/employeeDirectory"
    }
  ];
  return (
    <div className="container bg-white border border-light pb-4">
        <h2 className="text-info py-2">Portfolio</h2>
        <div className="container border border-dark mb-4"></div>
      <div class="wrapper">
        {projects.map(project => (
          <Thumbnail
            url={project.url}
            image={project.thumbnail}
            name={project.name}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
