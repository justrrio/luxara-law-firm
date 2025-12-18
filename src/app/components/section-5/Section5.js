"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import officeConfig from "./OfficeData.json";
import GoogleMapsEmbed from "./GoogleMapsEmbed";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section5() {
  const [imageScale, setImageScale] = useState(1);
  const [mapHeight, setMapHeight] = useState("250px");
  const [isDesktopView, setIsDesktopView] = useState(false);

  const OFFICE_CONFIG = officeConfig.office;

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsDesktopView(w >= 1024);
      setMapHeight(w >= 1024 ? "350px" : w >= 768 ? "300px" : "250px");
      setImageScale(w >= 1024 ? 1 : w >= 768 ? 1.2 : 1.1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useGSAP(() => {
    const section5Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5-container", // wrapper div
        start: "top 70%",
      },
    });

    section5Tl.fromTo(
      ".section4-title",
      {
        opacity: 0,
        y: 30,
        filter: "blur(3px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      }
    );

    section5Tl.fromTo(
      ".section5-card",
      {
        opacity: 0,
        y: 30,
        filter: "blur(3px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      },
      "-=0.4"
    );

    section5Tl.fromTo(
      ".section5-image-content",
      {
        opacity: 0,
        y: 30,
        filter: "blur(3px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      },
      "-=0.4"
    );
  });

  return (
    <section
      className="section5-container relative flex justify-center items-center font-georgia bg-white overflow-x-hidden"
      aria-labelledby="contact-heading"
      id="kontak"
    >
      <div className="w-full h-full relative overflow-hidden">
        <div className="section5-image-content absolute inset-0 w-full h-full overflow-hidden">
          {isDesktopView ? (
            <Image
              src="/section-5/Section5.png"
              alt="Background kantor hukum dengan ilustrasi handshake profesional"
              fill
              priority
              quality={100}
              className="object-cover opacity-100 pointer-events-none select-none"
              sizes="100vw"
            />
          ) : (
            <Image
              src="/section-5/background.svg"
              alt=""
              fill
              priority
              quality={100}
              className="object-cover opacity-100 pointer-events-none select-none scale-150"
              sizes="100vw"
            />
          )}
        </div>

        <div className="relative z-30 flex flex-col px-4 md:px-8 lg:px-16 2xl:px-32 py-4 md:py-6 lg:py-12 2xl:py-20 items-center gap-20 min-h-screen">
          <header className="flex justify-center py-6 sm:py-8 flex-shrink-0">
            <h1
              id="contact-heading"
              className="section5-title text-black text-2xl sm:text-3xl lg:text-5xl font-serif font-normal"
            >
              Hubungi Kami
            </h1>
          </header>

          <div
            className={`flex flex-1 flex-col gap-2 lg:gap-5 max-w-8xl w-full ${
              isDesktopView
                ? "lg:justify-start lg:items-start lg:pl-8 2xl:pl-16"
                : "lg:flex-row justify-around items-center"
            }`}
          >
            {/* Left */}
            <div
              className={`w-full flex flex-col gap-4 sm:gap-6 ${
                isDesktopView ? "lg:w-[45%] lg:max-w-2xl" : "lg:w-[40%]"
              }`}
            >
              <div className="section5-card bg-white rounded-xl border border-gray-300 shadow-lg p-4 sm:p-6 w-full">
                <h2 className="text-lg sm:text-xl lg:text-4xl text-gray-800 font-serif font-normal mb-3 sm:mb-4">
                  Informasi Kantor
                </h2>
                <div className="text-sm sm:text-[15px] text-gray-800 leading-relaxed space-y-3">
                  <div>
                    <p className="text-[#c49a5f] font-semibold mb-1 text-2xl">
                      Alamat:
                    </p>
                    <address className="not-italic leading-snug text-xl">
                      {OFFICE_CONFIG.address.building}
                      <br />
                      {OFFICE_CONFIG.address.street}
                      <br />
                      {OFFICE_CONFIG.address.district}
                    </address>
                  </div>
                  <div>
                    <p className="text-[#c49a5f] font-semibold mb-1 text-2xl">
                      Nomor Telepon:
                    </p>
                    <a
                      href={`tel:${OFFICE_CONFIG.contact.phone.replace(
                        /\D/g,
                        ""
                      )}`}
                      className="hover:text-[#c49a5f] transition-colors duration-200 text-xl"
                    >
                      {OFFICE_CONFIG.contact.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[#c49a5f] font-semibold mb-1 text-2xl">
                      Email:
                    </p>
                    <a
                      href={`mailto:${OFFICE_CONFIG.contact.email}`}
                      className="hover:text-[#c49a5f] transition-colors duration-200 text-xl"
                    >
                      {OFFICE_CONFIG.contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-[#c49a5f] font-semibold mb-1 text-2xl">
                      Jam Kerja:
                    </p>
                    <p className="leading-snug text-xl">
                      {OFFICE_CONFIG.workingHours.weekdays}
                      <br />
                      {OFFICE_CONFIG.workingHours.weekend}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl shadow-lg"
                style={{
                  height: mapHeight,
                  minHeight: mapHeight,
                }}
              >
                <GoogleMapsEmbed
                  embedUrl={OFFICE_CONFIG.googleMapsEmbed}
                  mapsUrl={OFFICE_CONFIG.googleMapsLink}
                  height={mapHeight}
                />
              </div>
            </div>

            {/* Right (handshake) */}
            {!isDesktopView && (
              <div className="section5-image-content w-full lg:w-[35%] flex justify-center items-center">
                <div
                  className="relative flex justify-center items-center w-full"
                  style={{
                    maxWidth: "900px",
                    transform: `scale(${imageScale}) translateY(2px)`,
                    transition: "transform 0.3s ease-out",
                    transformOrigin: "center center",
                  }}
                >
                  <Image
                    src="/section-5/handShake.png"
                    width={700}
                    height={700}
                    priority
                    quality={100}
                    alt="Ilustrasi dua pengusaha berjabat tangan yang melambangkan kemitraan hukum profesional antara klien dan Luxara Law Firm"
                    className="section5-image-content object-contain w-full h-auto"
                    sizes="(max-width: 640px) 700px, (max-width: 768px) 700px, 800px"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
