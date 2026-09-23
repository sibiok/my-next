import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | My Next",
  description: "Have a question or want to work together? Send a message below.",
};


import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-2">Get in touch</h1>
      <p className="text-gray-600 mb-8">
        Have a question or want to work together? Send a message below.
      </p>
      <ContactForm />
    </main>
  );
}