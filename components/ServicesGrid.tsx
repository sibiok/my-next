// components/ServicesGrid.tsx
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    href: "/services/web-hosting",
    src: "/service-1.jpg",
    category: "Hosting",
    title: "Web Hosting",
  },
  {
    href: "/services/reseller-hosting",
    src: "/service-2.jpg",
    category: "Hosting",
    title: "Reseller Hosting",
  },
  {
    href: "/services/vps-hosting",
    src: "/service-3.jpg",
    category: "Hosting",
    title: "VPS Hosting",
  },
  {
    href: "/services/domain-registration",
    src: "/service-4.jpg",
    category: "Hosting",
    title: "Domain Registration",
  },
];

export default function ServicesGrid() {
  return (
        <section className="bg-slate-50 py-20 px-5 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
       <div className="text-center mb-14">
                <p className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
                 What We Do
                </p>
                <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-gray-500 text-lg">
                  Over twenty years of hands-on Linux expertise, delivering results
                  that matter.
                </p>
              </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="relative block group"
          >
            {/* Image */}
            <div className="relative w-full h-80 rounded-md overflow-hidden">
              <Image
                src={service.src}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Caption card - overlaps bottom-left of the image */}
            <div className="absolute -bottom-8 left-6 right-10 bg-[#01a3e1] p-5 rounded-sm shadow-md">
              <p className="text-white text-sm mb-1">{service.category}</p>
              <h3 className="text-xl font-semibold text-white group-hover:text-brand transition-colors">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
