// components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section: heading + CTA (left), text + socials (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left: heading + button */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Lets make something great together
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Book a call  <ArrowUpRight className="w-4 h-4" />
             
            </Link>
          </div>

          {/* Right: text + social pills */}
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Iced pumpkin ristretto irish trifecta robusta trade froth
              affogato barista con barista cappuccino filter roast.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="mailto:hello@example.com"
                className="flex items-center justify-center gap-2 border border-gray-700 rounded-full px-4 py-2 text-sm hover:bg-slate-900 transition-colors"
              >
               <FaFacebookF className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 border border-gray-700 rounded-full px-4 py-2 text-sm hover:bg-slate-900 transition-colors"
              >
              <FaInstagram className="w-4 h-4" /> Instagram
              </a>
       <a
                href="#"
                className="flex items-center justify-center gap-2 border border-gray-700 rounded-full px-4 py-2 text-sm hover:bg-slate-900 transition-colors"
              >
                 <FaLinkedinIn className="w-4 h-4" /> LinkedIn
              </a>
              
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-6" />

        {/* Bottom bar: nav links + copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/work" className="hover:text-gray-300">Work</Link>
            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tailwind Awesome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}