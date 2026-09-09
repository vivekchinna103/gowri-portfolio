"use client";

import { useEffect, useState } from "react";

const careerStart = new Date(2022, 6, 1);

function completedYears(date = new Date()) {
  let years = date.getFullYear() - careerStart.getFullYear();
  const anniversaryReached = date.getMonth() > careerStart.getMonth()
    || (date.getMonth() === careerStart.getMonth() && date.getDate() >= careerStart.getDate());
  if (!anniversaryReached) years -= 1;
  return Math.max(years, 0);
}

export default function ExperienceYears() {
  const [years, setYears] = useState(completedYears);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setYears(completedYears()));
    return () => cancelAnimationFrame(frame);
  }, []);

  return <>{years}+ years</>;
}
