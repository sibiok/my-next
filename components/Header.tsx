// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white w-full sticky top-0 z-50 border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/">
        <Image
          src="/logo1.jpg"
          alt="My Site logo"
          width={300}
          height={72}
          priority
          className={`w-auto transition-all duration-300 ${
            isScrolled ? "h-8" : "h-10"
          }`}
        />
      </Link>
        <Nav />
      </div>
    </header>
  );
}