// components/Nav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Mobile toggle button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu">
        {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
      </button>

      {/* Desktop links — always visible from md breakpoint up */}
      <div className="hidden md:flex items-center gap-6 font-poppins">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact" className="bg-brand text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity inline-block">  Contact   
        </Link>
      </div>

      {/* Mobile dropdown menu — only shows when isOpen is true */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white font-poppins flex flex-col gap-4 p-6 shadow-md z-50 animate-in slide-in-from-top fade-in duration-200">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>          
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link  className="bg-brand text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity inline-block" href="tel:9847587606" onClick={() => setIsOpen(false)}>Call us 9847587606</Link>
        </div>
      )}
    </nav>
  );
}