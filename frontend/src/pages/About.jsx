import { useMemo, useState } from "react";

function About() {
  const skills = [
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "frontend",
    },
    {
      name: "Node JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "backend",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "frontend",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "backend",
    },
    {
      name: "Express JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "backend",
    },
    {
      name: "DSA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      category: "tools",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      category: "frontend",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      category: "frontend",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "backend",
    },
    {
      name: "Git & GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "tools",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      category: "tools",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "frontend",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "frontend",
    },
    {
      name: "OOP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "tools",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      category: "tools",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "tools",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const options = ["all", "frontend", "backend", "tools"];

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return skills;
    return skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="page about-v2">
      <div className="about-v2-head panel">
        <h1>Hey, I&apos;m Sudhanshu 👋</h1>
        <p className="home-v2-summary">
          I&apos;m currently in my 6th semester of B.Tech in Computer Science and Engineering from Delhi
          Technological University (DTU). As a dedicated software developer, I&apos;m committed to
          expanding my knowledge in programming, with a focus on DSA and web development.
        </p>
        <p className="home-v2-summary">
          I enjoy working on innovative software solutions and collaborating with like-minded individuals to
          bring ideas to life.
        </p>
      </div>

      <article className="panel about-v2-skills">
        <h3>Skills</h3>
        <div className="skill-filter-row">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={selectedCategory === option ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedCategory(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="home-v2-skills">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="home-v2-skill-chip">
              <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" loading="lazy" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default About;
