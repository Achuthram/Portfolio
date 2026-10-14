
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "SQL"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vite", "NPM"],
  },
];

const iconMap = {
  HTML5: "5",
  CSS3: "3",
  JavaScript: "JS",
  React: "⚛",
  Java: "☕",
  "Spring Boot": "S",
  MySQL: "DB",
  SQL: "SQL",
  Git: "G",
  GitHub: "GH",
  "VS Code": "VS",
  Postman: "P",
  Vite: "V",
  NPM: "N",
  "REST APIs": "API",
  "Responsive Design": "R",
};

function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-heading">
          <span className="section-kicker">
            <Layers3 size={15} /> MY TOOLKIT
          </span>

          <h2 className="section-title">
            Technologies I <span className="gradient-text">work with.</span>
          </h2>

          <p>
            The technologies I use to build interfaces and develop my
            full-stack skills.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <motion.article
                className="skill-group glass-card"
                key={group.title}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: groupIndex * 0.1 }}
              >
                <div className="skill-group-heading">
                  <span className="skill-group-icon">
                    <GroupIcon size={21} />
                  </span>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-items">
                  {group.skills.map((skill) => (
                    <motion.div
                      className="skill-item"
                      key={skill}
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="skill-symbol">
                        {iconMap[skill] || <GitBranch size={18} />}
                      </span>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
