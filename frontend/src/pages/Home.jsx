import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import self from "../assets/self.png";

function Home() {
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
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "backend" },
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", category: "tools" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
    { name: "OOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "tools" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "tools" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "tools" },
  ];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const options = ["all", "frontend", "backend", "tools"];
  const tickerSkills = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "DSA", "REST APIs", "GitHub"];
  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return skills;
    return skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="page home-redesign">
      <div className="home-bg-glow home-bg-glow-a" />
      <div className="home-bg-glow home-bg-glow-b" />

      <div className="home-v2-hero">
        <div className="home-v2-photo">
          <img
            className="home-v2-photo-img"
            src={self}
            alt="Sudhanshu profile"
          />
        </div>

        <div className="home-v2-intro">
          <h1 className="home-v2-title">Hey, I&apos;m Sudhanshu 👋</h1>
          <p className="home-v2-summary">
            I&apos;m a final year B.Tech CSE student at Delhi Technological University (DTU) with a strong foundation in Data Structures & Algorithms and software development, I&apos;m deeply passionate about problem-solving, backend development, and building impactful tech products. 
          </p>
          <p className="home-v2-summary">
            Always learning, always growing—aiming to be best. Currently exploring job opportunities where I can learn, contribute, and sharpen my skills alongside brilliant minds.
          </p>

          <div className="home-v2-actions">
            <span className="home-v2-status">Available for work</span>
            <Link className="btn btn-primary home-v2-btn" to="/contact">
              Reach out
            </Link>
            <a
              className="btn btn-ghost home-v2-btn"
              href="https://drive.google.com/file/d/1R74LT2XIOmB9U7J_BpqAnOSYi6ROJMR6/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="home-v2-ticker">
        <div className="home-v2-ticker-track">
          <div className="ticker-segment">
            <span className="ticker-dot">•</span>
            {tickerSkills.map((item) => (
              <span key={`first-${item}`}>{item}</span>
            ))}
            <span className="ticker-dot">•</span>
          </div>
          <div className="ticker-segment">
            <span className="ticker-dot">•</span>
            {tickerSkills.map((item) => (
              <span key={`second-${item}`}>{item}</span>
            ))}
            <span className="ticker-dot">•</span>
          </div>
        </div>
      </div>

      <div className="home-v2-section">
        <h2>Studies</h2>
        <div className="home-v2-timeline">
          <article className="panel home-v2-panel">
            <p className="home-v2-year">2022 - 2026</p>
            <h3>Delhi Technological University (DTU)</h3>
            <p className="subtitle">B.Tech in Computer Science and Engineering</p>
            <p className="home-v2-meta">SGPA: 7.3</p>
          </article>
          <article className="panel home-v2-panel">
            <p className="home-v2-year">2021 - 2022</p>
            <h3>CRPF Public School Rohini Delhi</h3>
            <p className="subtitle">Class XII</p>
            <p className="home-v2-meta">Percentage: 94.8%</p>
          </article>
        </div>
      </div>

      <div className="home-v2-section">
        <h2>My Skills</h2>
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
        <article className="panel home-v2-skills">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="home-v2-skill-chip">
              <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" loading="lazy" />
              <span>{skill.name}</span>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Home;
