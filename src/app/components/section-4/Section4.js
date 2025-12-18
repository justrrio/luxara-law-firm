"use client"
import ServiceCard from "./ServiceCard";
import services from "@/app/contents/services.json";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section4() {

   useGSAP(() => {
    const section4Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section4-container", // wrapper div
        start: "top 70%",
      }
    });

    section4Tl.fromTo(".section4-title", 
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

    section4Tl.fromTo(".section4-service", 
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
        stagger: 0.05
      }, "-=0.4"
    );
  });

  return (
    <>
      <section
        id="profesionalitas"
        className="section4-container bg-[var(--background-section-4)] text-white flex flex-col items-center justify-center relative py-20"
      >
        <div className="absolute inset-0 bg-[url('/section-4/background-image.png')] bg-cover bg-no-repeat opacity-6 saturate-100 z-0"></div>
        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center gap-5 sm:gap-10 md:gap-15">
          <h1 className="section4-title font-georgia text-center text-2xl md:text-4xl xl:text-5xl">
            Layanan Hukum Kami
          </h1>
          <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-2xs sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="section4-service w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-19.2px)]"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
