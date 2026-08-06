import { useEffect, useMemo, useState } from "react";
import "./portfolio.css";

const profile = {
  name: "Micheal Wolski",
  headline: "Automotive Cybersecurity · Embedded Software · Product Security",
  location: "Woodhaven, Michigan",
  email: "michealswolski@gmail.com",
  linkedin: "https://www.linkedin.com/in/michealwolski",
  github: "https://github.com/Zaufanys",
  summary:
    "Early-career cybersecurity professional with Bosch Mobility experience supporting product-security workflows, secure-boot research, technical documentation, and cross-functional engineering teams. I enjoy learning new systems, communicating clearly, and building practical tools that make technical work easier to understand and manage.",
};

const experience = [
  {
    role: "Product Cybersecurity Intern",
    company: "Bosch Mobility · M/TEL-AM",
    period: "Aug 2025 — Jul 2026",
    location: "Michigan",
    bullets: [
      "Supported cross-divisional product-security intake and reporting workflows through data validation, documentation, and process improvement.",
      "Researched secure boot for safety-critical automotive controllers, including HSM, KMS, OTA/SWDL, attestation, anti-rollback, and boot-time considerations.",
      "Documented Power Apps and Dataverse workflow architecture, status logic, approvals, notifications, and SharePoint-linked records.",
      "Prepared technical documentation and presentation materials for cybersecurity workshops, professional-development activities, and stakeholder discussions.",
    ],
  },
];

const featuredProjects = [
  {
    eyebrow: "AUTOMOTIVE · SECURITY WORKFLOW",
    title: "Product Security Intake & Reporting",
    summary:
      "A public-safe case study based on internship workflow experience: structured intake, data validation, status tracking, notifications, and reporting for product-security requests.",
    contribution:
      "Designed and documented the workflow structure, record lifecycle, reporting logic, and user experience while supporting cross-functional product-security processes.",
    tech: ["Power Apps", "Dataverse", "Power Automate", "Power BI", "SharePoint", "SQL"],
    accent: "violet",
  },
  {
    eyebrow: "AUTOMOTIVE · EMBEDDED SECURITY",
    title: "CAN/OBD-II Vehicle Network Monitor",
    summary:
      "An academic prototype that reads vehicle data, records messages, and presents results through a Flask dashboard for vehicle-network security analysis.",
    contribution:
      "Built the Python, Flask, and SQLite workflow; explored message monitoring, anomaly observation, attack-surface awareness, and documentation of findings.",
    tech: ["Python", "Flask", "SQLite", "Raspberry Pi", "OBD-II", "CAN"],
    accent: "cyan",
  },
  {
    eyebrow: "RESEARCH · EMBEDDED SOFTWARE",
    title: "Secure Boot Research Brief",
    summary:
      "Technical research on secure boot options and constraints for safety-critical automotive controllers.",
    contribution:
      "Synthesized HSM, key management, software download, attestation, anti-rollback, hardware variability, and timing considerations into stakeholder-ready content.",
    tech: ["Secure Boot", "HSM", "KMS", "OTA/SWDL", "Attestation", "ISO/SAE 21434"],
    accent: "amber",
  },
];

const additionalProjects = [
  {
    title: "SOC Traffic Analysis & Vulnerability Labs",
    text: "Analyzed packet captures and security logs with Wireshark, Security Onion, and Splunk; practiced alert triage, service enumeration, and remediation prioritization.",
    tags: ["Wireshark", "Security Onion", "Splunk", "Nessus", "Nmap"],
  },
  {
    title: "AI Onboarding Agent Prototype",
    text: "Contributed to an internal hackathon prototype focused on using an LLM interface to help users find onboarding information from approved documentation.",
    tags: ["AI/LLM", "Python", "Document Retrieval", "UX"],
  },
  {
    title: "Windows Automation Utility",
    text: "Built scripting-based utilities for repeatable system checks, logging, and Windows administration tasks with an emphasis on clear output and safe operation.",
    tags: ["PowerShell", "Python", "Windows", "Automation"],
  },
];

const skillGroups = [
  {
    title: "Embedded & Automotive",
    skills: ["C", "C++", "Python", "ECU architecture", "Firmware concepts", "Bootloaders", "CAN/CAN FD", "UDS", "OBD-II", "DCM/DEM"],
  },
  {
    title: "Cybersecurity",
    skills: ["Product security", "Secure boot", "ISO/SAE 21434 familiarity", "UN R155/R156 awareness", "Wireshark", "Splunk", "Nessus", "Nmap", "Linux"],
  },
  {
    title: "Data & Automation",
    skills: ["Power BI", "Power Apps", "Dataverse", "Power Automate", "SQL/SQLite", "Flask", "Git/GitHub", "VS Code"],
  },
  {
    title: "Engineering Practices",
    skills: ["Technical documentation", "Requirements", "V-model familiarity", "ASPICE awareness", "Agile", "Testing concepts", "Root-cause analysis", "Stakeholder communication"],
  },
];

const education = [
  {
    degree: "B.S. Information Assurance & Cyber Defense",
    school: "Eastern Michigan University",
    meta: "Ypsilanti, MI · 2026 · GPA 3.66 · Cum Laude",
  },
  {
    degree: "A.A.S. Cybersecurity",
    school: "Henry Ford College",
    meta: "Dearborn, MI · May 2023 · GPA 3.90 · Dean’s List",
  },
];

const development = [
  "Auto-ISAC Summit 2026",
  "IQPC Automotive Cybersecurity 2026",
  "Secure boot SME research",
  "Bosch Cybersecurity Fire Drill — Game Master",
  "Internal CTF and AI hackathon participation",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const heatmap = useMemo(
    () => Array.from({ length: 112 }, (_, index) => ((index * 7 + index * index * 3) % 5)),
    []
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      document.documentElement.style.setProperty("--mx", `${x * 100}%`);
      document.documentElement.style.setProperty("--my", `${y * 100}%`);
      document.documentElement.style.setProperty("--mxn", x);
      document.documentElement.style.setProperty("--myn", y);
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="app">
      <div className="shell">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Micheal Wolski home">
            <span className="brand-mark">MW</span>
            <span>Micheal Wolski</span>
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a className="keep" href="#contact">Contact</a>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "☼" : "◐"}
            </button>
          </div>
        </nav>

        <main id="top">
          <section className="hero" aria-labelledby="hero-heading">
            <div>
              <span className="eyebrow">Available for early-career opportunities</span>
              <h1 id="hero-heading">
                Micheal
                <span className="liquid">Wolski.</span>
              </h1>
              <div className="hero-title">{profile.headline}</div>
              <p className="hero-copy">{profile.summary}</p>
              <div className="actions">
                <a className="btn btn-primary" href="#projects">View selected work <ArrowIcon /></a>
                <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
                <a className="btn btn-secondary" href={`mailto:${profile.email}`}>Email me</a>
              </div>
            </div>

            <aside className="terminal" aria-label="Professional snapshot">
              <div className="terminal-top">
                <div className="dots"><span className="dot" /><span className="dot" /><span className="dot" /></div>
                <span className="terminal-label">profile.status</span>
              </div>
              <div className="terminal-body">
                <div className="term-row"><span className="term-key">LOCATION</span><span className="term-value">{profile.location}</span></div>
                <div className="term-row"><span className="term-key">EXPERIENCE</span><span className="term-value">Bosch Mobility · M/TEL-AM</span></div>
                <div className="term-row"><span className="term-key">FOCUS</span><span className="term-value">Product security + embedded systems</span></div>
                <div className="term-row"><span className="term-key">STATUS</span><span className="term-value live">OPEN TO OPPORTUNITIES</span></div>
                <div className="term-note">
                  Clear communicator. Continuous learner. Focused on practical, well-documented engineering work.
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>

      <div className="signal-strip" aria-hidden="true">
        <div className="signal-track">
          {[...Array(2)].flatMap(() => ["Product Security", "Embedded Software", "CAN / UDS / OBD-II", "Secure Boot", "Python + C++", "Power Platform", "Technical Documentation", "Automotive Cybersecurity"]).map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
      </div>

      <div className="shell">
        <section className="section" id="experience">
          <div className="section-head">
            <div><span className="kicker">01 / Experience</span><h2>Automotive security in practice.</h2></div>
            <p className="section-intro">Experience supporting product-security processes, technical research, workflow documentation, and cross-functional collaboration in a global automotive environment.</p>
          </div>
          {experience.map((item) => (
            <article className="timeline" key={item.role}>
              <div className="timeline-meta">{item.period}<br />{item.location}</div>
              <div>
                <h3>{item.role}</h3>
                <div className="timeline-company">{item.company}</div>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <div><span className="kicker">02 / Selected work</span><h2>Practical systems, clearly explained.</h2></div>
            <p className="section-intro">Projects are framed with public-safe information and focus on the problem, contribution, technologies, and engineering lessons—not confidential company data.</p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" data-accent={project.accent} key={project.title}>
                <div className="project-eyebrow">{project.eyebrow}</div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-contribution"><strong>Contribution:</strong> {project.contribution}</p>
                <div className="tags">{project.tech.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="small-grid">
            {additionalProjects.map((project) => (
              <article className="small-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-head">
            <div><span className="kicker">03 / Capabilities</span><h2>Technical range with an automotive focus.</h2></div>
            <p className="section-intro">A balanced foundation across embedded software, vehicle communications, cybersecurity, automation, and technical communication.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">{group.skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-head">
            <div><span className="kicker">04 / Education</span><h2>Built on cybersecurity fundamentals.</h2></div>
            <p className="section-intro">Formal education supported by automotive cybersecurity events, hands-on labs, technical research, and continuous professional development.</p>
          </div>
          <div className="education-wrap">
            <div className="education-panel">
              {education.map((item) => (
                <article className="edu-item" key={item.degree}>
                  <h3>{item.degree}</h3>
                  <div className="edu-school">{item.school}</div>
                  <div className="edu-meta">{item.meta}</div>
                </article>
              ))}
            </div>
            <aside className="development-panel">
              <h3>Professional development</h3>
              <ul>{development.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
          </div>
        </section>

        <section className="section" aria-labelledby="github-heading">
          <div className="github-panel">
            <div>
              <span className="kicker">05 / GitHub</span>
              <h3 id="github-heading">A cleaner public profile is in progress.</h3>
              <p>This profile prioritizes automotive cybersecurity, embedded software, security automation, and clearly documented learning projects. Public repositories will continue to be organized around those themes.</p>
              <div className="actions"><a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">Open GitHub <ArrowIcon /></a></div>
            </div>
            <div className="heatmap" aria-label="Decorative contribution heatmap">
              {heatmap.map((level, index) => <span className="cell" style={{ "--level": level }} key={index} />)}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-card">
            <span className="kicker">Let’s connect</span>
            <h2>Interested in automotive cybersecurity, embedded software, or product security?</h2>
            <p>I’m open to early-career opportunities where I can keep learning, communicate across teams, and contribute to practical engineering and cybersecurity work.</p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Send an email <ArrowIcon /></a>
              <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 Micheal Wolski</span>
          <span>Designed for clarity · Built with React</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
