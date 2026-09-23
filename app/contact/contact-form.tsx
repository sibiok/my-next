"use client";
import type { Metadata } from "next";
import { useActionState } from "react";
import { submitContactForm } from "./actions";

const initialState = { success: false, message: "" };

export const metadata: Metadata = {
  title: "Contact Us | My Site",
  description: "Get in touch with our team — we'd love to hear from you.",
};
export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-black px-5 py-2.5 text-white font-medium disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send message"}
      </button>

      {state.message && (
        <p
          className={
            state.success ? "text-green-600 text-sm" : "text-red-600 text-sm"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}