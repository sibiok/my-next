// app/page.tsx
import PromoPopup from "@/components/PromoPopup";
import Slider from "@/components/Slider";
import FaqAccordion from "@/components/FaqAccordion";
import GoogleReviews from "@/components/GoogleReviews";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import ServicesGrid from "@/components/ServicesGrid";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { Users, Settings, FolderKanban, Wrench, AlarmClock } from "lucide-react";

export default function Home() {
  return (
    <main>
      <PromoPopup />
      <Slider />
      {/* Hero section */}

<AnimatedSection>         
<ServicesGrid />
</AnimatedSection>


      <AnimatedSection>
        <WhyUs />
      </AnimatedSection>

      {/* Two-column: text left, image right */}
      <AnimatedSection>
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4">
          <div>
       <div className="flex items-center gap-4 mb-4">
          <span className="w-16 h-px bg-brand" />
          <p className="text-brand font-semibold uppercase tracking-widest text-sm">
          About Us</p>
        </div>
            <h2 className="font-poppins text-4xl font-bold mb-3">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
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

<AnimatedSection>
  <Stats />
</AnimatedSection>

      {/* Reviews section */}
      <AnimatedSection>
        <section className="py-12 px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-16 h-px bg-brand" />
          <p className="text-brand font-semibold uppercase tracking-widest text-sm">
          About Us</p>
        </div>

          <h2 className="font-poppins text-4xl font-bold mb-3 text-center">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo
          </p>
          <GoogleReviews />
        </section>
      </AnimatedSection>
     

      {/* FAQ section */}
      <AnimatedSection>
        <section className="py-12 px-4">
          <h2 className="font-poppins text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
           <p className="text-gray-600 text-lg text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo
            </p>
          <FaqAccordion />
        </section>
      </AnimatedSection>
    </main>
  );
}
