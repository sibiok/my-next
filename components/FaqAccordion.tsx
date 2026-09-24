"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of web hosting and development services tailored to your needs, from basic shared hosting to fully managed solutions.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most plans are provisioned instantly after signup. You can have your site live within minutes of completing checkout.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we provide 24/7 customer support via chat and email for all hosting plans, with priority support on premium tiers.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your hosting plan at any time from your account dashboard with no downtime.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 divide-y divide-gray-200 border-gray-200">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-40 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}