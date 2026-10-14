
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";

function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="project-card glass-card">
      <div className="project-preview">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            <span className="project-placeholder-mark">AR</span>
            <span className="project-placeholder-title">
              {project.title}
            </span>
            <span className="project-placeholder-subtitle">
              {project.subtitle}
            </span>
            <span className="project-placeholder-code">
              &lt;build /&gt;
            </span>
          </div>
        )}

        <span className="project-status">{project.status}</span>

        {project.demo && (
          <a
            className="project-external"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live demo`}
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <div className="project-card-content">
        <span className="project-number">
          PROJECT / {String(project.id).padStart(2, "0")}
        </span>

        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span className="technology-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          <button
            type="button"
            className="project-details-button"
            onClick={() => onViewDetails(project)}
          >
            View Details <ArrowUpRight size={17} />
          </button>

          {project.github && (
            <a
              className="project-github"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} source code`}
            >
              <GitBranch size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
