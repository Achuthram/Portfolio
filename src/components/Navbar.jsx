import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(true);

  const toggle = () => {
    document.body.classList.toggle("light");
    setDark(!dark);
  };

  return (
    <nav>
      <h2 className="gradient">Achuth Ram</h2>
      <div>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={toggle}>{dark ? "🌙" : "☀️"}</button>
      </div>
    </nav>
  );
}

export default Navbar;