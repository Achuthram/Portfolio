
import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, MapPin, CalendarDays } from "lucide-react";
import experience from "../data/experience";

function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="experience-heading">
          <span className="section-kicker">
            <BriefcaseBusiness size={15} /> CAREER JOURNEY
          </span>

          <h2 className="section-title">
            Work <span className="gradient-text">experience.</span>
          </h2>

          <p>
            My professional experience building user interfaces and
            contributing to web applications.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              className="experience-card glass-card"
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="experience-marker">
                <BriefcaseBusiness size={20} />
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                  </div>

                  <span className="experience-period">
                    <CalendarDays size={15} />
                    {item.period}
                  </span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <ul className="experience-list">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>

                <span className="experience-location">
                  <MapPin size={15} />
                  {item.location}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
