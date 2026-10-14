
import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers3 } from "lucide-react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const reduceMotion = useReducedMotion();

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-heading">
          <div>
            <span className="section-kicker">
              <Layers3 size={15} /> SELECTED WORK
            </span>

            <h2 className="section-title">
              Projects that bring ideas{" "}
              <span className="gradient-text">to life.</span>
            </h2>

            <p>
              We’ll keep your existing project cards, styling, animations, and modal UI unchanged. We’ll focus on the project descriptions so recruiters can quickly understand what you built and which technologies you used.
            </p>
          </div>

          <span className="projects-count">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onViewDetails={setSelectedProject}
              />
            </motion.div>
          ))}
        </div>

        <div className="projects-footer">
          <span>More projects can be added as your portfolio grows.</span>
          <a href="#contact" className="secondary-button">
            Work with me <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={closeModal}
      />
    </section>
  );
}

export default Projects;
