// app/page.tsx
import FaqAccordion from "@/components/FaqAccordion";
import Image from "next/image";
import Link from "next/link";
import { Users, Settings, FolderKanban, Wrench, AlarmClock } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero section */}

<section
  className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-cover bg-center py-48 px-6 text-center text-white"
  style={{ backgroundImage: "url('/home-hero.jpg')" }}
>
  {/* Dark overlay so text stays readable */}
  <div className="absolute inset-0 bg-black/50 " />

  {/* Content sits above the overlay */}
  <div className="relative z-10">
    <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-4">Ready to Get Started?</h1>
    <p className="text-lg mb-6">
      Join thousands of happy customers hosting with us today.
    </p>

    <a href="/about"
     className="bg-brand text-white px-6 py-2 text-lg rounded-full hover:opacity-90 transition-opacity inline-block">
      Get Started
    </a>
  </div>
</section>

{/* 4-column features section */}
<section className="py-24">
  <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl font-bold mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          </p>
        </div>

         <hr className="mb-12" />
         
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div className="flex flex-col items-center text-center">
      <Image
        src="/feature-1.jpg"
        alt="Fast hosting"
        width={200}
        height={150}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mb-2">Services 1</h3>
      <p className="text-gray-600 text-sm">
        Our servers are optimized for speed, so your site loads instantly for every visitor.
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <Image
        src="/feature-2.jpg"
        alt="Secure hosting"
        width={200}
        height={150}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mb-2">Services 2</h3>
      <p className="text-gray-600 text-sm">
        Free SSL, daily backups, and proactive monitoring keep your site safe.
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <Image
        src="/feature-3.jpg"
        alt="24/7 support"
        width={200}
        height={150}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mb-2">Services 3</h3>
      <p className="text-gray-600 text-sm">
        Our team is available around the clock to help with anything you need.
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <Image
        src="/feature-4.jpg"
        alt="Easy scaling"
        width={200}
        height={150}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mb-2">Services 4</h3>
      <p className="text-gray-600 text-sm">
        Upgrade your plan anytime as your site grows, with zero downtime.
      </p>
    </div>
  </div>
</section>


     

      {/* Features section */}
      <section className="py-16 px-5">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl font-bold mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          </p>
        </div>

        <hr className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div>
            <Settings className="w-10 h-10 mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold mb-2">
              Instant Setup
            </h3>
            <p className="text-gray-600">
              As soon as you make a successful payment, your web hosting and
              domain names will be activated immediately. No waiting time
              whatsoever.
            </p>
          </div>

          <div>
            <Users className="w-10 h-10 mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold mb-2">
              Customer Support
            </h3>
            <p className="text-gray-600">
              We have a dedicated team of support for sales and support to
              help you via Phone helpdesk, live chat and email.
            </p>
          </div>

          <div>
            <Wrench className="w-10 h-10 mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold mb-2">
              Control Panel
            </h3>
            <p className="text-gray-600">
              All Linux hosting accounts come with the latest version of
              cPanel. This makes life easy for you to do routine tasks such
              as setting up email addresses and managing MySQL databases.
            </p>
          </div>

          <div>
            <AlarmClock className="w-10 h-10 mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold mb-2">
              99.9% Uptime Guarantee
            </h3>
            <p className="text-gray-600">
              We understand that your website needs to be accessible for the
              visitors in order to generate sales. For this reason we offer
              99.9% uptime guarantee.
            </p>
          </div>

        </div>
      </section>

      {/* Two-column: text left, image right */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
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

      {/* Two-column: image left, text right */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <Image
            src="/vps-hosting.jpg"
            width={307}
            height={488}
            alt="vps"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4 px-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>


{/* FAQ section */}
<section className="py-12 px-4">
  <h2 className="font-poppins text-4xl font-bold mb-8 text-center">
    Frequently Asked Questions
  </h2>
         
  <FaqAccordion />
</section>

   
    </main>
  );
}