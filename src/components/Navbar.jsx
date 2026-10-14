import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import "./components.css";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Navbar() { 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode
      ? "dark"
      : "light";
  }, [darkMode]);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
          aria-label="AR Portfolio home"
        >
          <span className="brand-mark">AR</span>
          <span className="brand-name">
            AR<span className="gradient-text">.dev</span>
          </span>
        </a>

        <nav
          id="mobile-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={
                activeSection === link.id ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button theme-button"
            onClick={() => setDarkMode((previous) => !previous)}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
            title="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="https://drive.google.com/file/d/1SYMV0DXSAOVTTPPs5sTVvvRePtyE4ZMf/view?usp=drive_link"
            className="primary-button nav-resume"   
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} />
            Resume
          </a>

          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;