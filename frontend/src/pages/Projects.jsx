const projects = [
  {
    title: "Enterprise Task Manager",
    description:
      "A full stack productivity platform with role-based access, project boards, and real-time updates.",
    stack: "React, Node.js, Express, MongoDB, Socket.IO",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Scalable storefront with advanced filtering, cart/checkout flow, and secure order processing.",
    stack: "React, Redux Toolkit, Express, MongoDB, Stripe",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless portfolio management system enabling dynamic content updates from an admin dashboard.",
    stack: "React, Node.js, Express, MongoDB, JWT",
  },
];

function Projects() {
  return (
    <section className="page">
      <h2>Projects</h2>
      <p className="subtitle">
        A sample of the web products I can build as a MERN stack developer.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="pill">{project.stack}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
