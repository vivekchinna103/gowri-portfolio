const projects = [
  { type: "Analytics platform", name: "InsightHub", description: "A full-stack analytics platform that turns raw data into clear, actionable insights.", stack: "React · Node.js · PostgreSQL", graphic: "chart" },
  { type: "Community platform", name: "CampusConnect", description: "A mobile-first platform that helps students discover opportunities and build meaningful networks.", stack: "Next.js · TypeScript · MongoDB", graphic: "mobile" },
];

const experience = [
  ["2023 — Present", "Software Engineer", "Building scalable full-stack features and collaborating across product, design, and data teams."],
  ["2021 — 2023", "Associate Software Engineer", "Developed and maintained web applications, APIs, and reliable system architecture."],
  ["2019 — 2021", "Software Engineering Intern", "Contributed to product features, testing practices, and internal developer tools."],
];
const technologies = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "Git", "AWS", "Tailwind CSS"];

function Arrow() { return <span aria-hidden="true">→</span>; }

function SystemMap() {
  return <div className="system-map" aria-label="An abstract map from ideas to impact" role="img">
    <span className="map-label label-idea">IDEAS</span><span className="map-label label-system">SYSTEMS</span><span className="map-label label-impact">IMPACT</span>
    <svg viewBox="0 0 460 360" fill="none" aria-hidden="true"><path d="M48 67C126 67 126 165 201 165H328" /><path d="M48 67C90 110 90 256 201 256H328" /><path d="M201 165C277 165 264 96 366 96" /><path d="M201 256C276 256 286 207 366 207" /><path className="map-dash" d="M48 67C16 137 16 231 48 298" /><circle cx="48" cy="67" r="8" /><circle cx="201" cy="165" r="8" /><circle cx="201" cy="256" r="8" /><circle cx="366" cy="96" r="8" /><circle cx="366" cy="207" r="8" /></svg>
    <span className="map-foot">PEOPLE<br />IDEAS<br />SYSTEMS<br />A BETTER TOMORROW</span>
  </div>;
}
function ProcessGraphic() { return <div className="process-graphic" role="img" aria-label="An abstract four-stage engineering process"><div className="process-stack"><i /><i /><i /><i /></div><div className="process-lines">{["UNDERSTAND", "DESIGN", "BUILD", "ITERATE", "IMPACT"].map((item) => <span key={item}>{item}</span>)}</div></div>; }
function ProjectGraphic({ type }: { type: string }) {
  if (type === "mobile") return <div className="project-graphic mobile-graphic" aria-hidden="true"><div className="phone"><i /><i /><i /><i /></div><span className="node node-one" /><span className="node node-two" /><span className="node node-three" /></div>;
  return <div className="project-graphic chart-graphic" aria-hidden="true"><div className="window"><b /><b /><b /><div className="bars"><i /><i /><i /><i /></div><div className="trend" /></div><span className="database" /></div>;
}
function OrbitGraphic() { return <div className="orbit-graphic" role="img" aria-label="An abstract connected network"><i /><i /><i /><b /><span /><span /><span /></div>; }
function GridGraphic() { return <div className="grid-graphic" aria-hidden="true"><i /><b /></div>; }

export default function Home() {
  return <main>
    <section className="hero section-cream" id="top">
      <nav className="nav wrap" aria-label="Main navigation"><a className="wordmark" href="#top">GOWRI K.</a><div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div></nav>
      <div className="hero-content wrap"><div className="hero-copy"><p className="eyebrow">FULL-STACK SOFTWARE ENGINEER</p><h1>DESIGNING<br />RELIABLE<br />SOFTWARE.</h1><p className="intro">I build thoughtful, scalable solutions that turn ideas into real impact. Focused on clean code, meaningful products, and a better tomorrow.</p><a className="button button-solid" href="#work">Explore work <Arrow /></a></div><div className="hero-art"><SystemMap /><div className="intention-card">BUILD WITH<br />INTENTION<span /></div></div></div>
    </section>
    <section className="about section-green" id="about"><div className="wrap two-column about-layout"><div><p className="section-number">01 / ABOUT</p><p className="about-copy">I enjoy building simple, scalable software that solves real problems. I care about user experience, system reliability, and creating technology that makes a positive difference in people’s lives.</p><div className="principles"><span>Curiosity<br /><b>drives better software</b></span><span>Collaboration<br /><b>builds stronger solutions</b></span><span>Intention<br /><b>creates lasting impact</b></span></div></div><ProcessGraphic /></div></section>
    <section className="section-cream work" id="work"><div className="wrap"><div className="section-heading"><p className="section-number">02 / SELECTED WORK</p><a href="#contact" className="text-link">View all work <Arrow /></a></div><div className="project-list">{projects.map((project) => <article className="project" key={project.name}><ProjectGraphic type={project.graphic} /><div className="project-copy"><p className="project-type">{project.type}</p><h2>{project.name}</h2><p>{project.description}</p><small>{project.stack}</small></div><a className="circle-button" href="#contact" aria-label={`Learn more about ${project.name}`}><Arrow /></a></article>)}</div></div></section>
    <section className="section-sage experience" id="experience"><div className="wrap two-column experience-layout"><div><p className="section-number">03 / EXPERIENCE</p><div className="timeline">{experience.map(([date, role, description]) => <article key={role}><p className="date">{date}</p><div><h2>{role}</h2><p>{description}</p></div></article>)}</div></div><div><OrbitGraphic /><p className="orbit-caption">BETTER SYSTEMS<br />BRIGHTER PEOPLE<br />BOLDER TOMORROWS</p></div></div></section>
    <section className="section-cream stack"><div className="wrap stack-layout"><div><p className="section-number">04 / TECH STACK</p><div className="technology-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div><GridGraphic /></div></section>
    <footer className="footer" id="contact"><div className="wrap"><p className="eyebrow">GET IN TOUCH</p><div className="footer-main"><h2>LET’S CREATE SOMETHING MEANINGFUL.</h2><a className="button button-outline" href="mailto:hello@example.com">Contact me <Arrow /></a></div><div className="footer-bottom"><span>GOWRI K. &nbsp;|&nbsp; FULL-STACK SOFTWARE ENGINEER</span><span>IDEAS &nbsp;→&nbsp; SYSTEMS &nbsp;→&nbsp; IMPACT</span></div></div></footer>
  </main>;
}
