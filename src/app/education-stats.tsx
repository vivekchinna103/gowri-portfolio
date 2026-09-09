"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./education-stats.module.css";

const education = [
  { level: "B.Tech", institution: "NIT Tiruchirappalli", detail: "Metallurgy & Materials Engineering | 2018 - 2022", score: 7.98, suffix: " / 10", decimals: 2 },
  { level: "Intermediate", institution: "Narayana Junior College", detail: "MPC | 2016 - 2018", score: 97.7, suffix: "%", decimals: 1 },
  { level: "SSC", institution: "Bhashyam Public School", detail: "Completed 2016", score: 9.8, suffix: " / 10", decimals: 1 },
];

export default function EducationStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(frame);
    }
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      setProgress(1 - Math.pow(1 - elapsed, 3));
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return <div className={styles.grid} ref={sectionRef}>
    {education.map((item) => <article className={styles.card} key={item.level}>
      <p className={styles.level}>{item.level}</p>
      <h3>{item.institution}</h3>
      <p className={styles.detail}>{item.detail}</p>
      <p className={styles.score} aria-label={`${item.score}${item.suffix}`}>{(item.score * progress).toFixed(item.decimals)}<small>{item.suffix}</small></p>
    </article>)}
  </div>;
}
