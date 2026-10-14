
import {
  ArrowUp,
  BriefcaseBusiness,
  GitBranch,
  Heart,
} from "lucide-react";
import profile from "../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a href="#home" className="footer-brand" aria-label="Back to home">
          <span className="brand-mark">AR</span>
          <span className="brand-name">
            AR<span className="gradient-text">.dev</span>
          </span>
        </a>

        <p className="footer-message">
          Designed with curiosity. Built with <Heart size={14} /> and code.
        </p>

        <div className="footer-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitBranch size={18} />
          </a>

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <BriefcaseBusiness size={18} />
            </a>
          )}

          <a href="#home" aria-label="Return to home">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} {profile.name}. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
