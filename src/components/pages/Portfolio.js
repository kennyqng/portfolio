import React from "react";
import Wrapper from "../Wrapper/";
import Thumbnail from "../Thumbnail";
import searchImg from "../../Assets/search.png";
import cookImg from "../../Assets/cook.png";
import sleepImg from "../../Assets/sleep.png";


function Portfolio() {
  const projects = [
    {
      name: "TL;DR - Too Long Didn't Read Search",
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
    }
  ];
  return (
    <div>
      <div
        class="container bg-white border border-light mt-4"
        id="project-wall"
      >
        <h2 class="text-info py-2">Portfolio</h2>

        <div class="container border border-dark mb-4"></div>
        <Wrapper>
          {projects.map(project => (
            <Thumbnail
              url={project.url}
              image={project.thumbnail}
              name={project.name}
            />
          ))}
        </Wrapper>
      </div>
    </div>
  );
}

export default Portfolio;
