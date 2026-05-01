import React from "react";
import graphPath from "../assets/graphPath.png";
import scatch1 from "../assets/scatch1.png";
import skillBridge from "../assets/skillBridgePic.png";
import social from "../assets/social-project1.png";
import sorting from "../assets/sorting.png";
import animeList from "../assets/animeList.png";

const projects = [
  {
    title: "SkillBridge - GenAi platform",
    description:
      "A full stack productivity platform with user authentication, Resume Parsing using Gemini AI, and a skill Gap Detection engine.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "JWT"],
    link: "https://skill-bridge-gen-ai-career-navigato-indol.vercel.app",
    image: skillBridge,
  },
  {
    title: "Socialize Platform",
    description:
      "Real-time user feed with dynamic rendering, likes/follows, and secure API integrations using Docker and CI/CD pipelines.",
    stack: ["React.js", "Node.js", "MongoDB", "Express.js", "Docker"],
    link: "https://social-media-networking-application.vercel.app",
    image: social,
  },
  {
    title: "myAnimeList",
    description:
      "full stack web app with user authentication, dynamic anime listings, API integrations and features like watchlists and reviews",
    stack: ["React.js", "Node.js", "MongoDB", "Express.js", "tailwind"],
    link: "https://my-anime-list-seven.vercel.app/",
    image: animeList,
  },
  {
    title: "Sorting Visualizer",
    description:
      "Animated visualizations of sorting algorithms like Quick Sort and Merge Sort. Features adjustable speed and array size.",
    stack: ["React JS", "JavaScript", "DSA", "Bootstrap"],
    link: "https://dsa-projects-iwk6.vercel.app",
    image: sorting,
  },
  {
    title: "GraphPath Visualizer",
    description:
      "Visualizes BFS and Dijkstra algorithms on an interactive grid. Demonstrates pathfinding from custom start to end points.",
    stack: ["React JS", "JavaScript", "DSA", "Bootstrap"],
    link: "https://dsa-projects-mu.vercel.app/",
    image: graphPath,
  },
  {
    title: "E-commerce Website",
    description:
      "A full-featured MERN shopping platform including product listings, cart functionality, and an admin dashboard.",
    stack: ["React JS", "Node JS", "Express", "MongoDB", "Tailwind"],
    link: "https://backend-project-fxgs.onrender.com/",
    image: scatch1,
  },
];

function Projects() {
  return (
    <section className="py-20 px-6 bg-slate-950 text-white rounded-4xl">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent ">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my expertise in building secure, scalable, full-stack web projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors w-full justify-center"
                >
                  View Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="Ref10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
