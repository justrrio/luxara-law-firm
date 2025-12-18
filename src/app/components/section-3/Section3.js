"use client"
import ProfileCard from "./ProfileCard";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profiles from "@/app/contents/profiles.json";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section3() {
  useGSAP(() => {
    const section3HeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3-container", // wrapper div
        start: "top 70%",
      }
    });

    section3HeaderTl.fromTo(".section3-title", 
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

    section3HeaderTl.fromTo(".section3-subtitle", 
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
      }, "-=0.4"
    );

    const section3CardTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3-container", // wrapper div
        start: "top 60%",
      }
    });

    section3CardTl.fromTo(".section3-profile-card", 
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
        stagger: 0.1
      }
    );
  });
  return (
    <>
      <section
        id="tim-kami"
        className="section3-container bg-[var(--background-section-3)] flex flex-col items-center justify-center relative py-20"
      >
        <div className="absolute inset-0 bg-[url('/section-3/background-image.png')] bg-cover bg-no-repeat opacity-10 saturate-100 z-0 "></div>
        <div className="z-10 w-full flex flex-col items-center justify-center">
          {/* HEADER */}
          <div className="flex flex-col items-center gap-4 text-center font-georgia px-4">
            <h1 className="section3-title text-[var(--text-primary-section-3)] text-2xl md:text-4xl xl:text-5xl">
              Temui Tim Advokat Profesional Kami
            </h1>
            <h2 className="section3-subtitle text-[var(--text-secondary-section-3)] text-md md:text-lg xl:text-xl font-normal">
              Tim ahli hukum dengan segudang pengalaman yang siap membantu Anda
            </h2>
          </div>
          {/* CARDS */}
          <div className="section3-card-container mt-10 flex flex-wrap justify-center gap-6 max-w-2xs sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl w-full">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="section3-profile-card w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] "
              >
                <ProfileCard {...profile} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
