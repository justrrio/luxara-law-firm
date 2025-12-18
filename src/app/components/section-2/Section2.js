"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Replace with your actual video URL (YouTube, Vimeo, etc.)
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useGSAP(() => {
    const aboutUsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-us", // wrapper div
        start: "top 70%",
      },
    });

    aboutUsTl.fromTo(
      ".left-side1",
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

    aboutUsTl.fromTo(
      ".right-side1",
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
      },
      "-=0.4"
    );

    const experienceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-experience",
        start: "top 60%",
      },
    });

    experienceTl.fromTo(
      ".left-side2",
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

    experienceTl.fromTo(
      ".right-side2",
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
      },
      "-=0.4"
    );
  });

  return (
    <>
      {/* Section About Us */}
      <section className="w-full h-full relative" id="tentang-kami">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--background-color-01)] -z-11" />
        <div className="absolute bottom-0 right-0 w-3/4 h-full -z-10 opacity-20">
          <Image
            src="/section-2/bg-item.png"
            alt="Background Item"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>

        {/* Section 2.1: Tentang kami */}
        <div className="about-us w-full min-h-screen flex flex-col xl:flex-row items-center justify-center px-4 md:px-8 lg:px-16 2xl:px-32 py-4 md:py-6 lg:py-12 2xl:py-20 gap-20 xl:gap-28 relative">
          {/* Left side: image */}
          <div className="left-side1 relative flex xl:flex-1 w-full h-[250] sm:h-[400] lg:h-120 2xl:h-160 items-center justify-center ">
            {/* Back Image */}
            <div className="rounded-xl overflow-hidden shadow-lg absolute top-0 left-25 xl:left-0 w-[250] h-[150] sm:w-[350] sm:h-[250] lg:w-[400] lg:h-[300] 2xl:w-[500] 2xl:h-[400]">
              <Image
                src="/section-2/about-1.png"
                alt="Discussion"
                fill
                className="object-cover"
              />
            </div>
            {/* Front Image */}
            <div className="rounded-xl overflow-hidden shadow-lg absolute bottom-0 right-25 xl:right-0 w-[250] h-[150] sm:w-[350] sm:h-[250] lg:w-[400] lg:h-[300] 2xl:w-[500] 2xl:h-[400]">
              <Image
                src="/section-2/about-2.png"
                alt="Discussion"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side: text content */}
          <div className="right-side1 relative w-full h-full xl:flex-1 flex flex-col justify-center gap-12 ">
            <div className="flex flex-col gap-6">
              <h2 className="text-[var(--text-secondary-section-01)] text-md md:text-lg xl:text-xl">
                Tentang Kami
              </h2>
              <h1 className="text-[var(--text-primary-section-01)] text-2xl md:text-4xl xl:text-5xl">
                Advokat Senior dengan Pengalaman & Integritas Tinggi
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-base 2xl:text-lg text-gray-200 leading-relaxed text-justify">
                Luxara Law Firm didirikan dengan visi untuk memberikan layanan
                hukum berkualitas tinggi yang didasarkan pada pengalaman
                mendalam dan integritas yang tidak tergoyahkan. Tim advokat
                senior kami memiliki track record yang terbukti dalam menangani
                berbagai kasus hukum kompleks, dari tingkat korporasi hingga
                individu yang membutuhkan perlindungan hukum terbaik. Dengan
                pengalaman bertahun-tahun di bidang hukum, kami memahami bahwa
                setiap kasus memerlukan pendekatan yang personal dan strategi
                yang tepat sasaran. Integritas merupakan fondasi utama dalam
                setiap langkah yang kami ambil, memastikan bahwa kepentingan
                klien selalu menjadi prioritas utama.
              </p>
              <p className="text-sm md:text-base 2xl:text-lg text-gray-200 leading-relaxed text-justify">
                Dengan pengalaman bertahun-tahun di bidang hukum, kami memahami
                bahwa setiap kasus memerlukan pendekatan yang personal dan
                strategi yang tepat sasaran.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2.2: Pengalaman Kami */}
        <div className="our-experience w-full min-h-screen flex flex-col xl:flex-row items-center justify-center px-4 md:px-8 lg:px-16 2xl:px-32 py-4 md:py-6 lg:py-12 2xl:py-20 lg:gap-10 gap-28 h-full">
          {/* Left Side: Text Content */}
          <div className="left-side2  w-full flex flex-col justify-center gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[var(--text-secondary-section-01)] text-md md:text-lg xl:text-xl">
                Pengalaman Kami
              </h2>
              <h1 className="text-[var(--text-primary-section-01)] text-2xl md:text-4xl xl:text-5xl">
                Ratusan Kasus Telah Kami Tangani dengan Baik
              </h1>
            </div>
            <button
              onClick={handlePlayClick}
              className="flex items-center gap-8 group cursor-pointer transition-all duration-300 hover:gap-10"
            >
              <div className="relative w-12 h-12 rounded-full bg-white group-hover:bg-gray-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                <Image
                  src="/section-2/play-icon.svg"
                  alt="Play Icon"
                  fill
                  priority
                  className="object-cover p-2"
                />
              </div>
              <h2 className="text-lg md:text-xl xl:text-2xl group-hover:text-[var(--text-secondary-section-01)] transition-colors duration-300">
                Tonton Video Kami
              </h2>
            </button>
            <p className="text-sm md:text-base 2xl:text-lg text-gray-200 leading-relaxed text-justify">
              Sepanjang perjalanan Luxara Law Firm, kami telah berhasil
              menangani ratusan kasus dengan tingkat keberhasilan yang tinggi.
              Mulai dari sengketa bisnis kompleks, kasus pidana dan perdata,
              hingga konsultasi hukum korporasi, setiap kasus ditangani dengan
              dedikasi penuh dan keahlian profesional.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="right-side2 flex h-[250] sm:h-120 md:h-150 xl:h-[100vh] xl:flex-2 items-center justify-center ">
            <div className="relative flex justify-center items-center w-[300] sm:w-[600] lg:w-[850] xl:w-[600] 2xl:w-[850] h-full ">
              <div className="rounded-xl overflow-hidden shadow-lg absolute w-[150] h-[250] sm:w-[300] sm:h-[450] md:w-[300] md:h-[500] lg:w-[400] lg:h-[600] xl:w-[300] xl:h-[500] 2xl:w-[400] 2xl:h-[600] z-10">
                <Image
                  src="/section-2/about-2.png"
                  alt="Discussion"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={100}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg absolute left-0 w-[100] h-[200] sm:w-[200] sm:h-[350] md:w-[200] md:h-[400] lg:w-[300] lg:h-[500] xl:w-[200] xl:h-[400] 2xl:w-[300] 2xl:h-[500] -rotate-12">
                <Image
                  src="/section-2/about-4.png"
                  alt="Discussion"
                  fill
                  className="object-cover object-right"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg absolute right-0 w-[100] h-[200] sm:w-[200] sm:h-[350] md:w-[200] md:h-[400] lg:w-[300] lg:h-[500] xl:w-[200] xl:h-[400] 2xl:w-[300] 2xl:h-[500] rotate-12">
                <Image
                  src="/section-2/about-3.png"
                  alt="Discussion"
                  fill
                  className="object-cover object-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl={videoUrl}
      />
    </>
  );
}
