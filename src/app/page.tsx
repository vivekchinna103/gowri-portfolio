import Image from "next/image";

import EducationStats from "./education-stats";
import ExperienceYears from "./experience-years";

const projects = [
  { type: "Enterprise access control & agentic AI", name: "ACL Restructuring & AI Platform", description: "Engineered a centralized RBAC framework with Python, Django, and GraphQL, standardizing Role–Permission–Resource–Action mappings and reusable authorization decorators. Built conversational analytics and SEO agents with multi-agent validation and safety guardrails.", stack: "Python | Django | GraphQL | RBAC | LangGraph | React", graphic: "chart" },
  { type: "Cloud-native API platform", name: "Clinical Studio Core Module", description: "Built FastAPI services with SQLAlchemy, Pydantic, and Alembic, reducing cross-module integration issues by 30%. Delivered Entra ID and JWT authorization, secure S3 uploads through IRSA, and Dockerized EKS deployments with Kubernetes and Helm. Improved application performance by 25%.", stack: "FastAPI | SQLAlchemy | Azure Entra ID | AWS S3 & EKS | Helm | Pytest", graphic: "mobile" },
  { type: "NLP automation & full-stack delivery", name: "CSC Validator Application", description: "Developed a Flask engine to score 10,000+ knowledge articles using NLP and machine learning, reducing manual evaluation effort by 90% with less than 3% misclassification. Extended a production React application with reusable UI components and audit workflows.", stack: "Flask | React | NLTK | Scikit-learn | PostgreSQL", graphic: "chart" },
  { type: "ETL & incident analytics", name: "MuleSoft Automation Application", description: "Built scheduled Python services and ETL pipelines to normalize incident data, calculate MTTR and MTTC, and generate analysis-ready CSV files. Delivered Chart.js dashboards and automated Excel reports, reducing monthly reporting effort by 75%.", stack: "Python | Pandas | REST APIs | ETL | Chart.js", graphic: "mobile" },
  { type: "Cloud application & search", name: "Azure OSS Organization App", description: "Built Django REST APIs and improved search accuracy by 40% with Azure Cognitive Search. Implemented MSAL and Microsoft Graph authentication, automated workflows with Azure Functions, and reduced deployment time by 60% through Azure DevOps pipelines.", stack: "Django | Azure Functions | Cognitive Search | MSAL | Azure DevOps", graphic: "chart" },
];

const experience = [
  { date: "Feb 2026 - Present", role: "Software Engineer II", company: "Talentica Software, Remote", description: "Building enterprise access control and full-stack agentic AI applications. Designed reusable Django and GraphQL authorization, and developed conversational analytics and SEO automation with LangGraph, ReAct, RAG, and React." },
  { date: "Jul 2022 - Jan 2026", role: "Senior Software Engineer", company: "LTM, Hyderabad", description: "Delivered Python APIs, React application enhancements, NLP automation, and ETL analytics. Built secure AWS and Azure integrations, optimized databases and asynchronous services, and shipped containerized applications through CI/CD and Kubernetes." },
];

const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "JavaScript", "HTML", "CSS"] },
  { title: "Backend & APIs", items: ["FastAPI", "Django", "Flask", "SQLAlchemy", "Alembic", "REST APIs", "GraphQL"] },
  { title: "Frontend", items: ["React", "Chart.js"] },
  { title: "Generative & Agentic AI", items: ["LangGraph", "LangChain", "RAG", "LLMs", "ReAct", "Multi-Agent Systems", "Tool Calling", "Text-to-SQL", "Agent Orchestration"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Azure SQL"] },
  { title: "Cloud & DevOps", items: ["AWS EC2 / S3 / RDS / EKS", "Azure Functions / App Service", "Azure Entra ID", "Azure Key Vault", "Azure Cognitive Search", "Docker", "Kubernetes", "Helm", "Jenkins", "Git", "Azure DevOps", "SonarQube"] },
  { title: "Data & Automation", items: ["ETL", "Pandas", "Selenium", "Beautiful Soup", "NLTK", "Scikit-learn"] },
  { title: "Engineering & Security", items: ["OOP", "DSA", "System Design", "Distributed Systems", "Database Optimization", "RBAC", "JWT", "OAuth 2.0", "API Security", "Pytest", "Agile / Scrum"] },
];

const platformProjects = [
  {
    number: "01",
    label: "AI-ASSISTED SEO INTELLIGENCE",
    title: "SEO Compass",
    summary: "An evidence-first SEO auditing and safe-remediation workspace that turns a live website into a prioritized, developer-ready improvement plan.",
    highlights: ["Crawls JavaScript-rendered pages and scores technical, on-page, structured-data, performance, and mobile signals.", "Separates deterministic evidence from AI explanation, prioritization, and bounded remediation support.", "Maps issues to likely source files, validates changes, and can create draft pull requests for human review."],
    stack: ["FastAPI", "React", "Playwright", "LangGraph", "ReAct", "RAG", "Lighthouse", "Pydantic"],
    flow: ["URL", "CRAWL", "EVIDENCE", "ACTION"],
    image: "/images/seo-compass-visual.png",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt: "An SEO audit workspace with health score, crawl signals, and growth chart",
  },
  {
    number: "02",
    label: "AGENTIC ANALYTICS + ETL",
    title: "Data Agent ? Analytics & ETL Copilot",
    summary: "A conversational data assistant for natural-language analytics, authenticated API extraction, data transformation, and on-demand reporting over a PostgreSQL ride-hailing dataset.",
    highlights: ["Routes requests between SQL analytics, ETL processing, and general conversational support.", "Generates transparent, validated read-only SQL and returns business-friendly insights.", "Exports CSV, JSON, or Parquet only on request, with configurable API authentication and predictable error handling."],
    stack: ["Python", "React", "LangChain", "LangGraph", "Text-to-SQL", "PostgreSQL", "Pandas", "FastAPI"],
    flow: ["ASK", "ROUTE", "QUERY", "INSIGHT"],
    image: "/images/data-copilot-visual.png",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt: "An agentic data workflow connecting sources, orchestration, validation, and analytics outputs",
  },
];

const personalProjects = [
  {
    number: "01",
    label: "MULTI-AGENT REPOSITORY INTELLIGENCE",
    title: "Orion",
    summary: "A conversational GitHub repository assistant that helps developers understand codebases, pull requests, commits, and issues, and turn source evidence into high-level implementation plans.",
    highlights: ["Coordinates four specialist roles through validated task dependencies, running independent investigations in parallel.", "Retrieves read-only GitHub evidence and synthesizes source-linked answers with explicit coverage limits.", "Preserves repository-bound chat history and compacted context, with live progress, pinned chats, and answer feedback."],
    stack: ["Python", "FastAPI", "LangChain", "LangGraph", "Google Gemini", "React", "PostgreSQL", "SQLAlchemy"],
    flow: ["ASK", "PLAN", "INVESTIGATE", "ANSWER"],
    image: "/images/orion-home.png",
    imageWidth: 1917,
    imageHeight: 847,
    imageAlt: "Orion homepage with repository selection, a chat composer, and prompts for exploring pull requests, codebase, and history",
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
    <section className="hero hero-editorial" id="top" aria-labelledby="hero-title">
      <nav className="editorial-nav wrap" aria-label="Main navigation">
        <a className="editorial-wordmark" href="#top" aria-label="Gowri Vivek Kandregula, home">Gowri Vivek<span aria-hidden="true">.</span></a>
        <div className="editorial-nav-links"><a href="#top" aria-current="page">Home</a><a href="#about">About</a><a href="#work">Projects</a><a href="#personal-projects">Personal work</a></div>
        <a className="editorial-contact" href="mailto:gowrivivek07@gmail.com">Get in touch <span aria-hidden="true">&#8599;</span></a>
      </nav>
      <div className="editorial-portrait" aria-hidden="true" />
      <div className="editorial-content wrap">
        <div className="editorial-heading"><p className="editorial-greeting">Hey, I&apos;m Gowri.</p><h1 id="hero-title">Python<br />Full-Stack<br /><span>Developer.</span></h1></div>
        <div className="editorial-intro"><p className="editorial-statement">Thoughtful code.<br />Reliable systems.</p><p>From secure APIs to intuitive interfaces and agentic AI &mdash; I build software that brings it all together.</p><a className="editorial-work-link" href="#work">Explore my work <span aria-hidden="true">&#8599;</span></a></div>
      </div>
      <div className="editorial-bottom wrap"><p><span className="editorial-status" aria-hidden="true" />Python &middot; React &middot; Cloud &middot; Agentic AI</p><a href="#about">A little more about me <span aria-hidden="true">&#8595;</span></a></div>
    </section>

    <section className="about section-ink" id="about"><div className="wrap two-column about-layout"><div><p className="section-number">01 / ABOUT</p><div className="about-summary"><p className="about-copy">I build full-stack applications with Python, FastAPI, Django, Flask, React, and SQL. With <ExperienceYears /> of experience across AWS and Azure, I work on secure APIs, microservices, database optimization, and reliable cloud-native delivery.</p><p>My recent work combines enterprise authorization with Generative AI and Agentic AI: building RBAC frameworks and multi-agent applications using LangGraph, LangChain, RAG, ReAct, and LLM tool calling. I bring a foundation in OOP, data structures, system design, and distributed systems to the full development lifecycle.</p></div><div className="about-capabilities"><span><b>BUILD</b>Python, FastAPI, Django, Flask, React, SQL</span><span><b>ARCHITECT</b>Microservices, system design, RBAC, multi-agent orchestration</span><span><b>SHIP</b>Pytest, CI/CD, Docker, Kubernetes, AWS, Azure</span></div><div className="principles"><span><ExperienceYears /><br /><b>professional experience</b></span><span>350+ problems<br /><b>DSA and Python practice</b></span><span>50+ hours/month<br /><b>operations automated</b></span></div></div><ProcessGraphic /></div></section>

    <section className="section-cream work" id="work"><div className="wrap"><div className="section-heading"><p className="section-number">02 / PROJECTS</p><p className="text-link">Full-stack systems, automation, and agentic AI</p></div><div className="project-list">{projects.map((project, index) => <article className={`project${index === 0 ? " project-with-subprojects" : ""}`} key={project.name}><ProjectGraphic type={project.graphic} /><div className="project-copy"><p className="project-type">{project.type}</p><h2>{project.name}</h2><p>{project.description}</p><small>{project.stack}</small></div>{index === 0 && <div className="platform-projects" aria-label="AI platform applications">{platformProjects.map((app) => <section className="platform-project" key={app.title}><Image src={app.image} alt={app.imageAlt} width={app.imageWidth} height={app.imageHeight} sizes="(max-width: 800px) 100vw, 40vw" /><div><h3>{app.title}</h3><p>{app.summary}</p><ul>{app.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><small>{app.stack.join(" | ")}</small></div></section>)}</div>}</article>)}</div></div></section>

    <section className="personal-projects section-ink" id="personal-projects"><div className="wrap"><div className="section-heading"><p className="section-number">03 / PERSONAL PROJECTS</p><p className="text-link">Agentic AI and developer tooling</p></div><div className="personal-project-list">{personalProjects.map((project) => <article className="personal-project" key={project.title}><div className="personal-project-heading"><span>{project.number}</span><p>{project.label}</p></div><div className="personal-project-hero"><div><h2>{project.title}</h2><p>{project.summary}</p></div><div className="personal-project-visual"><Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 800px) 100vw, 42vw" /><div className="project-flow" aria-label={`${project.title} workflow`}>{project.flow.map((step, index) => <span key={step}>{step}{index < project.flow.length - 1 && <i>-&gt;</i>}</span>)}</div></div></div><div className="personal-project-details"><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div><p className="project-type">Built with</p><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></div></article>)}</div></div></section>

    <section className="section-sand experience" id="experience"><div className="wrap two-column experience-layout"><div><p className="section-number">04 / EXPERIENCE</p><div className="timeline">{experience.map((item) => <article key={item.company}><p className="date">{item.date}</p><div><h2>{item.role}</h2><p className="company">{item.company}</p><p>{item.description}</p></div></article>)}</div></div><ExperienceImpactGraphic /></div></section>

    <section className="section-ink stack" id="skills"><div className="wrap stack-layout"><div><p className="section-number">05 / TECH STACK</p><div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h2>{group.title}</h2><div className="technology-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div><TechSystemGraphic /></div></section>

    <section className="education section-cream" id="education"><div className="wrap"><p className="section-number">06 / EDUCATION</p><EducationStats /><div className="certification-note"><p className="project-type">Certifications</p><p>Microsoft Certified: Azure DevOps (AZ-400), Azure Developer (AZ-204), Azure Fundamentals (AZ-900), and Azure Data Fundamentals (DP-900).</p></div></div></section>

    <footer className="footer" id="contact"><div className="wrap"><p className="eyebrow">GET IN TOUCH</p><div className="footer-main"><h2>LET&apos;S BUILD SOMETHING RELIABLE.</h2><a className="button button-outline" href="mailto:gowrivivek07@gmail.com">Email me <Arrow /></a></div><div className="contact-links"><a href="mailto:gowrivivek07@gmail.com">gowrivivek07@gmail.com</a><a href="tel:+916303395554">+91 63033 95554</a><a href="https://www.linkedin.com/in/gowri-vivek-kandregula-4765681b0/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/vivekchinna103" target="_blank" rel="noreferrer">GitHub</a></div><div className="footer-bottom"><span>GOWRI VIVEK KANDREGULA | PYTHON FULL-STACK DEVELOPER</span><span>IDEAS -&gt; SYSTEMS -&gt; IMPACT</span></div></div></footer>
  </main>;
}
