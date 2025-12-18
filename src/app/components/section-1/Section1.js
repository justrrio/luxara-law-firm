"use client"
import Image from "next/image";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import { useGsapHover } from "@/hooks/useGsapButtonHover";

gsap.registerPlugin(useGSAP);

export default function Section1() {

  const konsultasiRef = useGsapHover();
  
  useGSAP(() => {
    const heroTl = gsap.timeline();
    
    heroTl.fromTo(".heading", 
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

    heroTl.fromTo(".subHeading", 
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
      }, "-=0.5"
    );

    heroTl.fromTo(".paragraph", 
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
      }, "-=0.5"
    );
  });

  return (
    <section className="hero relative min-h-screen flex items-end overflow-hidden px-4 md:px-8 lg:px-16 2xl:px-32 py-4 md:py-6 lg:py-12 2xl:py-20">
      <Image
        src="/section-1/bg-hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover -z-10"
        sizes="100vw"
        quality={100}
      />
      <div className="hero-content flex flex-col gap-4 lg:gap-8">
        <h1 className="heading text-2xl md:text-4xl xl:text-5xl text-white opacity-0">Team Advokat Professional</h1>
        <p className="subHeading text-md md:text-lg xl:text-xl text-white max-w-2xl opacity-0">Pelayanan terbaik dari tim advokat berpengalaman yang siap mendampingi Anda dalam setiap permasalahan hukum.</p>
        <a ref={konsultasiRef} className="paragraph text-md md:text-lg xl:text-xl px-10 py-3 self-start bg-white/10 backdrop-blur-lg rounded-full cursor-pointer opacity-0">
          <span className="btn-text-default absolute inset-0 flex items-center justify-center">
            Konsultasi Sekarang
          </span>
          <span className="btn-text-hover absolute inset-0 flex items-center justify-center">
            Konsultasi Sekarang
          </span>
          <span className="invisible">Konsultasi Sekarang</span>
        </a>
      </div>
    </section>
  );
}