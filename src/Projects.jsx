import React from "react";

function Projects() {
  return (
    <div className="container projects">
      <h1>My Projects</h1>
      <p>Here are some of the projects I have worked on:</p>
      <ul>
        <li>
          <strong>Project 1:</strong> Portfolio Website - A responsive portfolio using ReactJS.
          <a href="https://github.com/yourgithub/portfolio" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </li>
        <li>
          <strong>Project 2:</strong> E-Commerce App - An online shopping platform with cart and payment integration.
          <a href="https://github.com/yourgithub/ecommerce" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </li>
        <li>
          <strong>Project 3:</strong> Blog Platform - A blogging website with authentication and comment features.
          <a href="https://github.com/yourgithub/blog" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
