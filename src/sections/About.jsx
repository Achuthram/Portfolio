
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";
import profile from "../data/profile";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive interfaces with React, JavaScript, HTML, and CSS.",
  },
  {
    icon: Layers3,
    title: "Reusable Components",
    description:
      "Organizing UI into maintainable components with clear responsibilities.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Learning",
    description:
      "Expanding my skills with Java, Spring Boot, and MySQL.",
  },
];

function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-heading">
          <span className="section-kicker">
            <Sparkles size={15} /> GET TO KNOW ME
          </span>

          <h2 className="section-title">
            Turning ideas into{" "}
            <span className="gradient-text">digital experiences.</span>
          </h2>

          <p className="about-intro">
            I'm {profile.name}, a frontend developer interested in building
            modern web applications that combine thoughtful design,
            responsive layouts, and maintainable code.
          </p>
        </div>

        <div className="about-layout">
          <motion.div
            className="about-profile glass-card"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-avatar">
              <span className="gradient-text">AR</span>
              <div className="avatar-orbit avatar-orbit-one" />
              <div className="avatar-orbit avatar-orbit-two" />
            </div>

            <h3>{profile.name}</h3>
            <p>{profile.role}</p>

            <div className="about-location">
              <span className="status-dot" />
              {profile.location}
            </div>

            <div className="about-education">
              <GraduationCap size={23} />
              <div>
                <strong>B.Tech in Electrical and Electronics Engineering</strong>
                <span>Graduated in 2024</span>
              </div>
            </div>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="about-highlight glass-card"
                  key={item.title}
                  initial={
                    reduceMotion ? false : { opacity: 0, x: 20 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                >
                  <div className="highlight-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
