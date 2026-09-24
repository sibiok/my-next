// components/PromoPopup.tsx
"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Auto-open shortly after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet — just show a confirmation message for now.
    // Later you can send this to an API route or a form service.
    console.log({ name, email, phone });
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Dark backdrop - click to close */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup card */}
      <div className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-600">
              We&apos;ve received your details and will be in touch shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <p className="text-brand font-semibold uppercase tracking-wide text-sm mb-2">
                Limited Time Offer
              </p>
              <h2 className="text-2xl font-bold mb-2">Get 30% Off</h2>
              <p className="text-gray-600">
                Leave your details and we&apos;ll send you the discount code.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="popup-name" className="sr-only">
                  Name
                </label>
                <input
                  id="popup-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label htmlFor="popup-email" className="sr-only">
                  Email
                </label>
                <input
                  id="popup-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label htmlFor="popup-phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="popup-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <button
                type="submit"
                className="bg-brand text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Claim Offer
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
