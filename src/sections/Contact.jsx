
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Copy,
  GitBranch,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import profile from "../data/profile";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");
  const reduceMotion = useReducedMotion();

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setNotice("");
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "Message must contain at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNotice("");

    if (!validate()) return;

    const subject = encodeURIComponent(form.subject.trim());

    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\n` +
      `Email: ${form.email.trim()}\n\n` +
      `${form.message.trim()}`
    );

    const mailtoUrl =
      `mailto:${profile.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setNotice(
      "Your email draft is ready. Please send it from your email application."
    );
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);

      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setNotice(`Please copy this email address: ${profile.email}`);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-heading">
          <span className="section-kicker">
            <Send size={15} /> LET'S CONNECT
          </span>

          <h2 className="section-title">
            Have a project in mind?
            <br />
            <span className="gradient-text">
              Let's build something great.
            </span>
          </h2>

          <p>
            Have an opportunity, collaboration idea, or question?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          <motion.div
            className="contact-info glass-card"
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="contact-overline">CONTACT INFORMATION</span>

            <h3>Let's start a conversation.</h3>

            <p className="contact-info-description">
              Reach out about frontend development, projects,
              or professional opportunities.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <Mail size={20} />
              </span>

              <div>
                <small>Email me</small>
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>

              <button
                type="button"
                className="contact-copy"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title="Copy email"
              >
                {copied ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={20} />
              </span>

              <div>
                <small>Location</small>
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="contact-socials">
              <span>FIND ME ONLINE</span>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitBranch size={20} />
              </a>

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <BriefcaseBusiness size={20} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            noValidate
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact-form-heading">
              <h3>Send me a message</h3>
              <p>Fields marked with * are required.</p>
            </div>

            <div className="contact-form-grid">
              <div className="form-field">
                <label htmlFor="contact-name">Your name *</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-name" : undefined}
                />
                {errors.name && (
                  <span className="form-error" id="error-name">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Your email *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "error-email" : undefined}
                />
                {errors.email && (
                  <span className="form-error" id="error-email">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="contact-subject">Subject *</label>
                <input
                  id="contact-subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={form.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "error-subject" : undefined
                  }
                />
                {errors.subject && (
                  <span className="form-error" id="error-subject">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="contact-message">Your message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea..."
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "error-message" : undefined
                  }
                />
                {errors.message && (
                  <span className="form-error" id="error-message">
                    {errors.message}
                  </span>
                )}
              </div>
            </div>

            <button type="submit" className="primary-button contact-submit">
              Prepare Email <ArrowUpRight size={18} />
            </button>

            {notice && (
              <p className="contact-notice" role="status">
                {notice}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
