// components/WhyUs.tsx
import { Shield, Clock, Users, Layers } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security First",
    text: "Every server is hardened with industry-best practices: firewalls, intrusion detection and regular security audits.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    text: "Quick turnaround on every request. Critical issues are picked up immediately, with real-time communication throughout.",
  },
  {
    icon: Users,
    title: "Expert Team",
    text: "Seasoned Linux engineers with deep experience across control panels, web servers, databases and cloud platforms.",
  },
  {
    icon: Layers,
    title: "Affordable Pricing",
    text: "Transparent, competitive pricing with no hidden fees. Enterprise-grade service without the enterprise price tag.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-50 py-20 px-5 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
            Why ServerOK
          </p>
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-500 text-lg">
            Over twenty years of hands-on Linux expertise, delivering results
            that matter.
          </p>
        </div>

        {/* 2x2 grid of feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white  px-12 rounded-2xl py-12 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
