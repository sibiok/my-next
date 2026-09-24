import AboutHero from "@/components/AboutHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About us | My Next",
  description: "This is about us page description",
};

export default function AboutPage() {
  return (
<main>
   <AnimatedSection>
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-brand text-white py-24 px-6 text-center">
        <p className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">
          About Us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hosting Built by People Who Care
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Over 20 years of experience keeping websites fast, secure, and
          online — so you can focus on growing your business.
        </p>
      </section>
</AnimatedSection>

<AnimatedSection>
       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4">
        
              <div>
                <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.

                </p>
              </div>
              <div>
                <Image
                  src="/webdesign-offer.png"
                  alt="design"
                  width={307}
                  height={488}
                  className="rounded-lg w-full h-auto"
                />
           
              </div>
            </section>
            </AnimatedSection>
    </main>
  );
}