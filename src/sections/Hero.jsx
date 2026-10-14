import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Globe,
  Sparkles,
  Terminal,
} from "lucide-react";
import profile from "../data/profile";

const technologies = [
  { name: "React", icon: "⚛", className: "tech-react" },
  { name: "JavaScript", icon: "JS", className: "tech-js" },
  { name: "CSS3", icon: "CSS", className: "tech-css" },
  { name: "HTML5", icon: "HTML", className: "tech-html" },
];

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay },
  });

  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="glow-orb glow-orb-purple hero-orb hero-orb-one" />
      <div className="glow-orb glow-orb-blue hero-orb hero-orb-two" />

      <div className="container hero-layout">
        <div className="hero-content">
          <motion.div className="availability-badge" {...reveal(0.1)}>
            <span className="status-dot" />
            <Sparkles size={14} />
            <span>Frontend Developer · Open to opportunities</span>
          </motion.div>

          <motion.p className="hero-eyebrow" {...reveal(0.2)}>
            HELLO, I'M
          </motion.p>

          <motion.h1 className="hero-title" {...reveal(0.3)}>
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="gradient-text">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.h2 className="hero-role" {...reveal(0.4)}>
            {profile.role}
          </motion.h2>

          <motion.p className="hero-description" {...reveal(0.5)}>
            {profile.description}
          </motion.p>

          <motion.div className="hero-buttons" {...reveal(0.6)}>
            <a href="#projects" className="primary-button">
              Explore My Work
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Let's Talk
            </a>
          </motion.div>

          <motion.div className="hero-socials" {...reveal(0.7)}>
            <span>CONNECT WITH ME</span>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Globe size={19} />
            </a>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <BriefcaseBusiness size={19} />
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.92, x: 25 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="visual-glow" />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="code-window glass-card">
            <div className="window-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="window-filename">
                developer.jsx
              </span>
              <Terminal size={16} />
            </div>

            <div className="code-content">
              <p>
                <span className="code-muted">01</span>{" "}
                <span className="code-purple">const</span>{" "}
                developer = {"{"}
              </p>
              <p>
                <span className="code-muted">02</span>{" "}
                &nbsp;name: <span className="code-green">"AR"</span>,
              </p>
              <p>
                <span className="code-muted">03</span>{" "}
                &nbsp;role: <span className="code-green">"React Dev"</span>,
              </p>
              <p>
                <span className="code-muted">04</span>{" "}
                &nbsp;creative: <span className="code-blue">true</span>,
              </p>
              <p>
                <span className="code-muted">05</span>{" "}
                &nbsp;building: <span className="code-green">"The Future"</span>
              </p>
              <p>
                <span className="code-muted">06</span> {"}"};
              </p>
              <p className="code-comment">
                <span className="code-muted">07</span>{" "}
                // Turning ideas into interfaces.
              </p>
            </div>

            <div className="window-footer">
              <span>
                <span className="status-dot" /> Available for collaboration
              </span>
              <Code2 size={16} />
            </div>
          </div>

          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              className={`floating-tech ${technology.className}`}
              animate={
                shouldReduceMotion
                  ? {}
                  : { y: [0, -10, 0], rotate: [0, 2, 0] }
              }
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <span>{technology.icon}</span>
              <small>{technology.name}</small>
            </motion.div>
          ))}

          <div className="visual-label">
            <span className="visual-label-icon">
              <Sparkles size={16} />
            </span>
            <span>
              <strong>Creative by design</strong>
              <small>Built with curiosity</small>
            </span>
          </div>
        </motion.div>
      </div>

      <a className="scroll-indicator" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

export default Hero;