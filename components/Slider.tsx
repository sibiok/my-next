// components/Slider.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/slide1.jpg",
    alt: "Slide 1",
    caption: "Reliable Web Hosting",
    description: "Fast, secure servers trusted by thousands of businesses.",
  },
  {
    src: "/slide2.jpg",
    alt: "Slide 2",
    caption: "24/7 Expert Support",
    description: "Our team is always here to help, day or night.",
  },
  {
    src: "/slide3.jpg",
    alt: "Slide 3",
    caption: "99.9% Uptime Guarantee",
    description: "Your website stays online when it matters most.",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-[700px] overflow-hidden">
      {/* Track: all slides in a row, shifted left/right with translateX */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay so text stays readable */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Caption + description + button — only render the active slide's text,
          keyed by `current` so the fade-in animation re-triggers on every change */}
      <div
        key={current}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
          {slides[current].caption}
        </h2>
        <p className="text-lg mb-6 max-w-xl">
          {slides[current].description}
        </p>
        <Link
          href="/contact"
          className="bg-brand text-white px-6 py-3 rounded-full text-lg hover:opacity-90 transition-opacity inline-block"
        >
          Contact Us
        </Link>
      </div>

      {/* Progress bars */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="w-10 h-1.5 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className={`h-full bg-white ${
                index === current
                  ? "animate-[fillbar_5s_linear_forwards]"
                  : index < current
                  ? "w-full"
                  : "w-0"
              }`}
              key={`${index}-${current}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
