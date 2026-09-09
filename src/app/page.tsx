import Image from "next/image";
import EducationStats from "./education-stats";
import ExperienceYears from "./experience-years";

const projects = [
  { type: "Enterprise security platform", name: "Deloitte - ACL Restructuring Platform", description: "Modernized authentication and authorization across enterprise applications, tools, and APIs. Designed a centralized RBAC model to simplify user-role-permission mapping and improve maintainability.", stack: "RBAC | Authentication | Authorization | APIs", graphic: "chart" },
  { type: "API platform", name: "Johnson & Johnson - Core Module", description: "Built scalable FastAPI services with SQLAlchemy, Pydantic, and Alembic. Delivered Azure Entra ID authentication, secure AWS S3 uploads, Dockerized services, and EKS deployments.", stack: "FastAPI | AWS EKS | Azure Entra ID | PostgreSQL", graphic: "mobile" },
  { type: "NLP automation", name: "Johnson & Johnson - CSC Validator", description: "Developed a Flask automation engine that scored 10,000+ knowledge articles using NLP and machine learning, reducing manual evaluation effort by 90%.", stack: "Flask | NLTK | Scikit-learn | AWS RDS", graphic: "chart" },
  { type: "Workflow automation", name: "Johnson & Johnson - MuleSoft Automation", description: "Automated incident processing, MTTR and MTTC reporting, and dashboard generation. Reduced monthly report preparation time by 75%.", stack: "Python | Pandas | Chart.js | Beautiful Soup", graphic: "mobile" },
  { type: "Cloud application", name: "Azure OSS Organization App", description: "Built and optimized Django REST APIs, improved Azure Cognitive Search accuracy by 40%, and automated background workflows with Azure Functions.", stack: "Django | Azure Functions | MSAL | Azure DevOps", graphic: "chart" },
];

const experience = [
  { date: "Jan 2026 - Present", role: "Software Engineer", company: "Talentica Software, Remote", description: "Driving end-to-end solution design and implementation for enterprise authentication and authorization modernization." },
  { date: "Jul 2022 - Jan 2026", role: "Senior Software Engineer", company: "LTIMindtree, Hyderabad", description: "Delivered API-driven, cloud-native applications, workflow automation, NLP systems, and secure Azure and AWS integrations for enterprise clients." },
];

const skillGroups = [
  { title: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "HTML", "CSS"] },
  { title: "Backend", items: ["FastAPI", "Flask", "Django", "SQLAlchemy", "Alembic", "REST APIs"] },
  { title: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Azure DevOps"] },
  { title: "Data & Agentic AI", items: ["PostgreSQL", "MySQL", "Pandas", "NLTK", "Scikit-learn", "Agentic AI", "LangChain", "LangGraph", "RAG", "LLM Tool Calling"] },
];

const personalProjects = [
  {
    number: "01",
    label: "AI-ASSISTED SEO INTELLIGENCE",
    title: "SEO Compass",
    summary: "An evidence-first SEO auditing and safe-remediation workspace that turns a live website into a prioritized, developer-ready improvement plan.",
    highlights: ["Crawls JavaScript-rendered pages and scores technical, on-page, structured-data, performance, and mobile signals.", "Separates deterministic evidence from AI explanation, prioritization, and bounded remediation support.", "Maps issues to likely source files, validates changes, and can create draft pull requests for human review."],
    stack: ["FastAPI", "Streamlit", "Playwright", "LangGraph", "Chroma", "RAG", "Lighthouse", "Pydantic"],
    flow: ["URL", "CRAWL", "EVIDENCE", "ACTION"],
    image: "/images/seo-compass-visual.png",
    imageAlt: "An SEO audit workspace with health score, crawl signals, and growth chart",
  },
  {
    number: "02",
    label: "AGENTIC ANALYTICS + ETL",
    title: "Data Analytics & ETL Copilot",
    summary: "A conversational data assistant for natural-language analytics, authenticated API extraction, data transformation, and on-demand reporting over a PostgreSQL ride-hailing dataset.",
    highlights: ["Routes requests between SQL analytics, ETL processing, and general conversational support.", "Generates transparent, validated read-only SQL and returns business-friendly insights.", "Exports CSV, JSON, or Parquet only on request, with configurable API authentication and predictable error handling."],
    stack: ["Python", "LangChain", "LangGraph", "Google Gemini", "PostgreSQL", "Pandas", "Streamlit", "FastAPI"],
    flow: ["ASK", "ROUTE", "QUERY", "INSIGHT"],
    image: "/images/data-copilot-visual.png",
    imageAlt: "An agentic data workflow connecting sources, orchestration, validation, and analytics outputs",
  },
];

function Arrow() { return <span aria-hidden="true">-&gt;</span>; }

function ProcessGraphic() { return <div className="process-graphic" role="img" aria-label="An animated engineering process from discovery to reliable delivery"><div className="process-graphic-top"><span>LIVE SYSTEM FLOW</span><span>01 - 05</span></div><div className="process-canvas"><svg viewBox="0 0 440 260" aria-hidden="true"><path className="process-route" d="M24 220H105V167H183V115H264V63H412" /><path className="process-route process-route-alt" d="M24 238H127V193H218V142H304V91H412" /></svg><span className="signal signal-one" /><span className="signal signal-two" /><span className="signal signal-three" /><div className="process-stack"><i /><i /><i /><i /></div><div className="process-lines">{["DISCOVER", "DESIGN", "BUILD", "TEST", "IMPROVE"].map((item, index) => <span className={`process-step step-${index + 1}`} key={item}>{item}</span>)}</div></div><p>INPUT - ARCHITECT - AUTOMATE - VALIDATE - DELIVER</p></div>; }
function ProjectGraphic({ type }: { type: string }) {
  if (type === "mobile") return <div className="project-graphic mobile-graphic" aria-hidden="true"><div className="phone"><i /><i /><i /><i /></div><span className="node node-one" /><span className="node node-two" /><span className="node node-three" /></div>;
  return <div className="project-graphic chart-graphic" aria-hidden="true"><div className="window"><b /><b /><b /><div className="bars"><i /><i /><i /><i /></div><div className="trend" /></div><span className="database" /></div>;
}
function ExperienceImpactGraphic() {
  return <figure className="impact-graphic" role="img" aria-label="A visual summary of Gowri's experience: secure systems, automation, cloud delivery, and meaningful impact">
    <div className="impact-graphic-top"><span>ENGINEERING LOG</span><span>2022 - NOW</span></div>
    <div className="impact-field">
      <svg viewBox="0 0 420 230" aria-hidden="true"><path d="M18 181H96V131H177V76H264V38H397" /><path className="impact-dash" d="M18 205H135V164H221V112H332V72H397" /><circle cx="96" cy="181" r="7" /><circle cx="177" cy="131" r="7" /><circle cx="264" cy="76" r="7" /><circle cx="397" cy="38" r="7" /></svg>
      <div className="impact-stamp">BUILD<br />WITH<br />INTENT</div>
      <div className="impact-label impact-label-one">DESIGN</div><div className="impact-label impact-label-two">AUTOMATE</div><div className="impact-label impact-label-three">DELIVER</div>
    </div>
    <figcaption className="impact-metrics"><span><b>4+</b><small>years building</small></span><span><b>50+</b><small>hours automated / month</small></span><span><b>2</b><small>cloud ecosystems</small></span></figcaption>
  </figure>;
}

function TechSystemGraphic() {
  return <figure className="tech-system-graphic" role="img" aria-label="A systems map showing Python, APIs, cloud, data, and agentic AI working together">
    <div className="tech-system-title"><span>BUILDING BLOCKS</span><b>01 - 05</b></div>
    <div className="tech-system-map">
      <div className="tech-track tech-track-python"><span>01</span><strong>PYTHON</strong><i /></div>
      <div className="tech-track tech-track-api"><span>02</span><strong>APIs</strong><i /></div>
      <div className="tech-track tech-track-cloud"><span>03</span><strong>CLOUD</strong><i /></div>
      <div className="tech-track tech-track-data"><span>04</span><strong>DATA</strong><i /></div>
      <div className="tech-track tech-track-ai"><span>05</span><strong>AGENTIC AI</strong><i /></div>
      <svg viewBox="0 0 310 275" aria-hidden="true"><path d="M28 30H144V83H262V137H148V192H278V246H191" /><circle cx="144" cy="83" r="5" /><circle cx="262" cy="137" r="5" /><circle cx="148" cy="192" r="5" /></svg>
    </div>
    <figcaption>LANGUAGE - SERVICES - INFRASTRUCTURE - INTELLIGENCE</figcaption>
  </figure>;
}

export default function Home() {
  return <main>
    <section className="hero section-cream" id="top">
      <div className="nav-shell"><nav className="nav wrap" aria-label="Main navigation"><a className="wordmark" href="#top">GOWRI VIVEK KANDREGULA</a><div className="nav-links"><a href="#about">About</a><a href="#personal-projects">Personal projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div></nav></div>
      <div className="hero-content wrap"><div className="hero-copy"><p className="eyebrow">PYTHON BACKEND ENGINEER</p><h1>BACKEND<br />SYSTEMS<br />BUILT TO SCALE.</h1><p className="intro">I am Gowri Vivek Kandregula, a Python developer with <ExperienceYears /> of experience building secure, scalable, API-driven applications and cloud-native systems.</p><div className="hero-actions"><a className="button button-solid" href="#work">Explore work <Arrow /></a><a className="button button-ghost" href="mailto:gowrivivek07@gmail.com">Email me</a></div></div><div className="hero-art"><div className="profile-frame"><Image src="/images/gowri-profile.jpg" alt="Gowri Vivek Kandregula" width={752} height={1016} priority sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="intention-card">SECURE BY<br />DESIGN<span /></div></div></div>
    </section>

    <section className="about section-ink" id="about"><div className="wrap two-column about-layout"><div><p className="section-number">01 / ABOUT</p><div className="about-summary"><p className="about-copy">I am a Python backend developer with <ExperienceYears /> of experience designing scalable, API-driven applications with FastAPI, Flask, and Django. I build secure, high-performance services across AWS and Azure, from clean REST APIs and SQL-backed data models to cloud-native production systems.</p><p>I enjoy solving complex backend problems end to end: modeling the domain with strong OOP and design patterns, building event-driven and distributed workflows, optimizing performance, and shipping reliable software with a focus on clarity and maintainability.</p></div><div className="about-capabilities"><span><b>BUILD</b>FastAPI, Flask, Django, REST APIs, SQL</span><span><b>ARCHITECT</b>OOP, event-driven systems, distributed systems, system design</span><span><b>SHIP</b>Unit testing, CI/CD, Docker, Kubernetes, Agile delivery</span></div><div className="principles"><span><ExperienceYears /><br /><b>professional experience</b></span><span>300+ problems<br /><b>DSA and Python practice</b></span><span>50+ hours/month<br /><b>operations automated</b></span></div></div><ProcessGraphic /></div></section>

    <section className="section-cream work" id="work"><div className="wrap"><div className="section-heading"><p className="section-number">02 / PROJECTS</p><p className="text-link">Enterprise systems and automation</p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.name}><ProjectGraphic type={project.graphic} /><div className="project-copy"><p className="project-type">{project.type}</p><h2>{project.name}</h2><p>{project.description}</p><small>{project.stack}</small></div></article>)}</div></div></section>

    <section className="personal-projects section-ink" id="personal-projects"><div className="wrap"><div className="section-heading"><p className="section-number">03 / PERSONAL PROJECTS</p><p className="text-link">Agentic AI and developer tooling</p></div><div className="personal-project-list">{personalProjects.map((project) => <article className="personal-project" key={project.title}><div className="personal-project-heading"><span>{project.number}</span><p>{project.label}</p></div><div className="personal-project-hero"><div><h2>{project.title}</h2><p>{project.summary}</p></div><div className="personal-project-visual"><Image src={project.image} alt={project.imageAlt} width={1536} height={1024} sizes="(max-width: 800px) 100vw, 42vw" /><div className="project-flow" aria-label={`${project.title} workflow`}>{project.flow.map((step, index) => <span key={step}>{step}{index < project.flow.length - 1 && <i>-&gt;</i>}</span>)}</div></div></div><div className="personal-project-details"><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div><p className="project-type">Built with</p><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></div></article>)}</div></div></section>

    <section className="section-sage experience" id="experience"><div className="wrap two-column experience-layout"><div><p className="section-number">04 / EXPERIENCE</p><div className="timeline">{experience.map((item) => <article key={item.company}><p className="date">{item.date}</p><div><h2>{item.role}</h2><p className="company">{item.company}</p><p>{item.description}</p></div></article>)}</div></div><ExperienceImpactGraphic /></div></section>

    <section className="section-cream stack" id="skills"><div className="wrap stack-layout"><div><p className="section-number">05 / TECH STACK</p><div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h2>{group.title}</h2><div className="technology-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div><TechSystemGraphic /></div></section>

    <section className="education section-sage" id="education"><div className="wrap"><p className="section-number">06 / EDUCATION</p><EducationStats /><div className="certification-note"><p className="project-type">Certifications</p><p>Microsoft Certified: Azure DevOps (AZ-400), Azure Developer (AZ-204), Azure Fundamentals (AZ-900), and Azure Data Fundamentals (DP-900).</p></div></div></section>

    <footer className="footer" id="contact"><div className="wrap"><p className="eyebrow">GET IN TOUCH</p><div className="footer-main"><h2>LET&apos;S BUILD SOMETHING RELIABLE.</h2><a className="button button-outline" href="mailto:gowrivivek07@gmail.com">Email me <Arrow /></a></div><div className="contact-links"><a href="mailto:gowrivivek07@gmail.com">gowrivivek07@gmail.com</a><a href="tel:+916303395554">+91 63033 95554</a><a href="https://www.linkedin.com/in/gowri-vivek-kandregula-4765681b0/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/vivekchinna103" target="_blank" rel="noreferrer">GitHub</a></div><div className="footer-bottom"><span>GOWRI VIVEK KANDREGULA | PYTHON BACKEND ENGINEER</span><span>IDEAS -&gt; SYSTEMS -&gt; IMPACT</span></div></div></footer>
  </main>;
}
