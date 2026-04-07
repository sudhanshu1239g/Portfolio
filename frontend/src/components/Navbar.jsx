import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/home", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="navbar">
        <div className="brand">
          <span className="brand-dot" />
          <div>
            <p className="brand-name">Sudhanshu</p>
            <p className="brand-role">Full Stack Developer</p>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
