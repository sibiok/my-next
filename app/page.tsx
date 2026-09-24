// app/page.tsx
import PromoPopup from "@/components/PromoPopup";
import Slider from "@/components/Slider";
import FaqAccordion from "@/components/FaqAccordion";
import GoogleReviews from "@/components/GoogleReviews";
import WhyUs from "@/components/WhyUs";
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

      {/* 4-column features section */}
      <AnimatedSection>
        <section className="py-24">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl font-bold mb-3">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/feature-1.jpg"
                alt="Fast hosting"
                width={495}
                height={325}
                className="rounded-md mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Services 1</h3>
              <p className="text-gray-600">
                Our servers are optimized for speed, so your site loads
                instantly for every visitor.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/feature-2.jpg"
                alt="Secure hosting"
                width={200}
                height={150}
                className="rounded-md mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Services 2</h3>
              <p className="text-gray-600">
                Free SSL, daily backups, and proactive monitoring keep your
                site safe.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/feature-3.jpg"
                alt="24/7 support"
                width={200}
                height={150}
                className="rounded-md mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Services 3</h3>
              <p className="text-gray-600">
                Our team is available around the clock to help with anything
                you need.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/feature-4.jpg"
                alt="Easy scaling"
                width={200}
                height={150}
                className="rounded-md mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Services 4</h3>
              <p className="text-gray-600 text-sm">
                Upgrade your plan anytime as your site grows, with zero
                downtime.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <WhyUs />
      </AnimatedSection>

      {/* Two-column: text left, image right */}
      <AnimatedSection>
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4">
          <div>
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

      {/* Reviews section */}
      <AnimatedSection>
        <section className="py-12 px-4">
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
