import React from "react";
import Wrapper from "../Wrapper/";
import Thumbnail from "../Thumbnail/Thumbnail";
import searchImg from "../../Assets/search.png";
import cookImg from "../../Assets/cook.png";
import sleepImg from "../../Assets/sleep.png";
import directoryImg from "../../Assets/directory.png";
import weatherImg from "../../Assets/weather.png";
import budgetImg from "../../Assets/budget.png";

function Portfolio() {
  const projects = [
    {
      name: "Too Long; Didn't Read",
      thumbnail: searchImg,
      url: "https://kennyqng.github.io/project-01/"
    },
    {
      name: "Pantry Chef",
      thumbnail: cookImg,
      url: "https://pantry-chef-kenny.herokuapp.com/"
    },
    {
      name: "ZTrak - The Sleep App",
      thumbnail: sleepImg,
      url: "https://github.com/kennyqng/project3"
    },
    {
      name: "Employee Directory",
      thumbnail: directoryImg,
      url: "https://kennydirectoryreact.herokuapp.com/"
    },
    {
      name: "Weather App",
      thumbnail: weatherImg,
      url: "https://kennyqng.github.io/Weather-Dashboard/"
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
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
