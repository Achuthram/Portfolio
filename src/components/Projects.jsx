// import p1 from "../assets/project1.jpg";
// import p2 from "../assets/project2.jpg";

function handleMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y / rect.height - 0.5) * 10;
  const rotateY = (x / rect.width - 0.5) * 10;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function reset(e) {
  e.currentTarget.style.transform = "rotateX(0) rotateY(0)";
}

function Projects() {
  return (
    <section id="projects" className="reveal">
      <h2>Projects</h2>

      <div className="grid grid-3">
        <div className="glass" onMouseMove={handleMove} onMouseLeave={reset}>
          <img src="https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg" width="100%" />
          <h3>LetsHyre</h3>
        </div>

        <div className="glass" onMouseMove={handleMove} onMouseLeave={reset}>
          <img src="https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg" width="100%" />
          <h3>Library System</h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;