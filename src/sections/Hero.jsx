
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  GitBranch,
  BriefcaseBusiness,
  Sparkles,
  Code2,
  Layers3,
  Zap,
} from "lucide-react";

import profile from "../data/profile";

function Hero() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section className="hero hero-glass" id="home">
      <div className="container">
        <div className="hero-layout">
          {/* LEFT: INTRODUCTION */}
          <div className="hero-content">
            <motion.div
              className="hero-availability"
              {...entrance(0.1)}
            >
              <span className="hero-status-dot" />
              <span>Available for opportunities</span>
              <Sparkles size={15} />
            </motion.div>

            <motion.p
              className="hero-greeting"
              {...entrance(0.2)}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero-title"
              {...entrance(0.3)}
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              className="hero-role"
              {...entrance(0.4)}
            >
              Full Stack Developer
              <span className="hero-role-divider"> | </span>
              <span className="gradient-text">React · Java</span>
            </motion.h2>

            <motion.p
              className="hero-description"
              {...entrance(0.5)}
            >
              {profile.description}
            </motion.p>

            <motion.div
              className="hero-actions"
              {...entrance(0.6)}
            >
              <a className="primary-button" href="#projects">
                Explore My Work
                <ArrowRight size={18} />
              </a>

              <a className="secondary-button" href="#contact">
                Let's Connect
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              {...entrance(0.7)}
            >
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="hero-social-link"
                >
                  <GitBranch size={19} />
                </a>
              )}

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="hero-social-link"
                >
                  <BriefcaseBusiness size={19} />
                </a>
              )}

              <span className="hero-social-caption">
                Let's build something meaningful.
              </span>
            </motion.div>
          </div>

          {/* RIGHT: FUTURISTIC GLASS PORTRAIT */}
          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 28,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: "easeOut",
            }}
          >
            <div className="hero-portrait">
              {/* Ambient glow */}
              <div className="portrait-glow" />
              <div className="portrait-glow portrait-glow-secondary" />

              {/* Decorative glass panels */}
              <motion.div
                className="portrait-glass-panel portrait-panel-back"
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, -7, 0], rotate: [-8, -6, -8] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="portrait-glass-panel portrait-panel-front"
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, 8, 0], rotate: [5, 7, 5] }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating neon outline */}
              <motion.div
                className="portrait-ring"
                animate={reduceMotion ? {} : { rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main portrait */}
              <motion.div
                className="portrait-image-wrap"
                animate={reduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/images/profile.png"
                  alt="Atchyuta Ramayya Illa — Frontend Developer"
                  className="portrait-image"
                  fetchPriority="high"
                />

                <div className="portrait-image-shade" />

                <div className="portrait-image-caption">
                  <span className="portrait-caption-dot" />
                  <span>Building digital experiences</span>
                </div>
              </motion.div>

              {/* Floating React card */}
              <motion.div
                className="portrait-floating-card portrait-card-react"
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, -9, 0], rotate: [0, 1.5, 0] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="portrait-card-icon portrait-icon-cyan">
                  <Code2 size={20} />
                </span>
                <span className="portrait-card-text">
                  <strong>React.js</strong>
                  <small>Frontend UI</small>
                </span>
              </motion.div>

              {/* Floating clean-code card */}
              <motion.div
                className="portrait-floating-card portrait-card-code"
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, 7, 0], rotate: [0, -1.5, 0] }
                }
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="portrait-card-icon portrait-icon-purple">
                  <Layers3 size={19} />
                </span>
                <span className="portrait-card-text">
                  <strong>Java + Spring Boot</strong>
                  <small>Backend Development</small>
                </span>
              </motion.div>

              {/* Performance card */}
              <motion.div
                className="portrait-floating-card portrait-card-performance"
                animate={
                  reduceMotion ? {} : { y: [0, -6, 0] }
                }
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap size={18} className="portrait-zap" />
                <span className="portrait-card-text">
                  <strong>MySQL + REST APIs</strong>
                  <small>Database & API Integration</small>
                </span>
              </motion.div>

              {/* Decorative particles */}
              <span className="portrait-particle portrait-particle-one" />
              <span className="portrait-particle portrait-particle-two" />
              <span className="portrait-particle portrait-particle-three" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}  
        <motion.a
          href="#about"
          className="hero-scroll-indicator"
          aria-label="Scroll to About section"
          animate={reduceMotion ? {} : { y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>Scroll to explore</span>
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
