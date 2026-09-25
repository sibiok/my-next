// components/Stats.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 785, label: "Global Brands" },
  { number: 533, label: "Happy Clients" },
  { number: 865, label: "Winning Award" },
  { number: 346, label: "Happy Clients" },
];

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect(); // only run once

        const duration = 1500; // total animation time in ms
        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className="text-4xl md:text-5xl font-bold mb-2">
      {count}
    </p>
  );
}

export default function Stats() {
  return (
    <section className="bg-brand text-white py-16 px-6 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <CountUp target={stat.number} />
            <p className="text-white-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
