
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

function ProjectModal({ project, onClose }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="project-modal glass-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close project details"
              autoFocus
            >
              <X size={21} />
            </button>

            <span className="section-kicker">PROJECT DETAILS</span>

            <h2 id="project-modal-title">
              {project.title}
            </h2>

            <p className="project-modal-subtitle">
              {project.subtitle}
            </p>

            <p className="project-modal-description">
              {project.details}
            </p>

            <h3>Key features</h3>

            <ul className="project-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <h3>Technologies</h3>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span className="technology-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            {project.demo && (
              <a
                className="primary-button project-modal-link"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Open Live Project <ArrowUpRight size={18} />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
