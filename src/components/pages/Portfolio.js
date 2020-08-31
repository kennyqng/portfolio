import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import searchImg from "../../Assets/search.png";
import cookImg from "../../Assets/cook.png";
import sleepImg from "../../Assets/sleep.png";
import directoryImg from "../../Assets/directory.png";
import weatherImg from "../../Assets/weather.png";

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
      name: "Employee Directory",
      thumbnail: directoryImg,
      url: "https://kennydirectoryreact.herokuapp.com/",
      github: "https://github.com/kennyqng/employeeDirectory"
    },
    {
      name: "Weather App",
      thumbnail: weatherImg,
      url: "https://kennyqng.github.io/Weather-Dashboard/",
      github: "https://github.com/kennyqng/Weather-Dashboard"
    }
  ];
  return (
    <div>
        <h2 class="text-info py-2">Portfolio</h2>
        <div class="container border border-dark mb-4"></div>
      <div
        class="wrapper"
      >
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
