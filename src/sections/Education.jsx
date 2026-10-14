
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Award,
  MapPin,
  CalendarDays,
} from "lucide-react";
import education from "../data/education";

function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="education-heading">
          <span className="section-kicker">
            <GraduationCap size={15} /> EDUCATION & LEARNING
          </span>

          <h2 className="section-title">
            Learning is a <span className="gradient-text">journey.</span>
          </h2>

          <p>
            My academic background and additional technical learning.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item, index) => {
            const Icon =
              item.type === "education" ? GraduationCap : Award;

            return (
              <motion.article
                key={item.id}
                className="education-card glass-card"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="education-icon">
                  <Icon size={25} />
                </div>

                <span className="education-type">
                  {item.type === "education"
                    ? "EDUCATION"
                    : "CERTIFICATION"}
                </span>

                <h3>{item.title}</h3>

                {item.institution && (
                  <p className="education-institution">
                    {item.institution}
                  </p>
                )}

                <p className="education-description">
                  {item.description}
                </p>

                <div className="education-meta">
                  {item.period && (
                    <span>
                      <CalendarDays size={14} />
                      {item.period}
                    </span>
                  )}

                  {item.location && (
                    <span>
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
    