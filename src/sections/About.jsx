
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
    title: "Backend Development",
    description:
      "Developing backend functionality and REST APIs using Java and Spring Boot.",
  },
  {
    icon: Rocket,
    title: "Database Management",
    description:
      "Working with SQL and MySQL for application data management.",
  },
  {
    icon: Rocket,
    title: "Full Stack Development",
    description:
      "Connecting frontend, backend, and databases to build complete web applications.",
  }
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
            <span className="gradient-text">full stack web experiences.</span>
          </h2>

          <p className="about-intro">
            I'm {profile.name},
            a Full Stack Developer skilled in React, Java, Spring Boot, and SQL. I enjoy building responsive web applications, developing backend APIs, and integrating databases to create reliable, user-friendly digital experiences.
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
