"use client";

import Image from "next/image";
import { useWhatsApp } from "../../../contexts/WhatsAppContext.js";
import {
  scrollToTentangKami,
  scrollToProfesionalitas,
} from "../../../utils/navigation.js";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section6() {
  const { hubungiKami, sistemBantuan, kebijakanPengembalian } = useWhatsApp();

  useGSAP(() => {
    const section6Row1Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section6-container", // wrapper div
        start: "top 70%",
      },
    });

    section6Row1Tl.fromTo(
      ".section6-profile",
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

    section6Row1Tl.fromTo(
      ".section6-service",
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

    section6Row1Tl.fromTo(
      ".section6-support",
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

    const section6Row2Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section6-container", // wrapper div
        start: "top 20%",
      },
    });

    section6Row2Tl.fromTo(
      ".section6-contact",
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
        stagger: 0.1,
      }
    );
  });

  return (
    <section className="section6-container flex flex-col items-center grow px-4 md:px-8 lg:px-16 2xl:px-32 py-4 md:py-6 lg:py-12 2xl:py-20 bg-gradient-to-r from-[#462802] via-[#362004] to-[#1F1B17] font-georgia">
      {/* Bagian utama: Logo, Layanan, Dukungan */}
      <div className="section6-row1 flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl gap-6 lg:gap-x-10">
        {/* === KOLOM 1: PROFIL PERUSAHAAN === */}
        <div className="section6-profile flex flex-col w-full lg:w-2/5 lg:pr-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-center mb-6">
            <Image
              src="/section-6/logo.png"
              alt="Logo Luxara Lawfirm"
              width={71}
              height={70}
              className="object-contain pointer-events-none select-none mb-4 sm:mb-0 sm:mr-4"
              priority
            />
            <div className="flex flex-col text-[#C9A875] text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                Luxara Lawfirm
              </h1>
              <h2 className="text-base sm:text-lg mt-1">
                Advokat dan Konsultan Hukum
              </h2>
            </div>
          </div>

          <div>
            <p className="text-white text-base font-sans leading-relaxed">
              Kami berkomitmen memberikan layanan hukum terbaik, mulai dari
              konsultasi hukum pidana dan perdata, hukum bisnis, hingga
              pendampingan untuk urusan perusahaan.
            </p>
          </div>

          <div className="flex flex-row gap-4 sm:gap-x-6 mt-6 justify-center sm:justify-start">
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#C9A875] hover:opacity-75 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-[#C9A875] hover:opacity-75 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[#C9A875] hover:opacity-75 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* === KOLOM 2: LAYANAN KAMI === */}
        <div className="section6-service w-full lg:w-2/5 mt-8 lg:mt-0">
          <h3 className="text-[#C9A875] text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-12 text-center lg:text-left">
            Layanan Kami
          </h3>
          <ul className="text-white text-sm sm:text-base w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Sengketa Hutang Piutang
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Sengketa Tanah dan Properti
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Perjanjian Jual Beli
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Restorative Justice
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Hak Asuh Anak
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Mediasi Keluarga
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Sengketa Warisan
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Penetapan Waris
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Wasiat dan Hibah
            </li>
            <li className="pb-2.5 mb-2.5 border-b border-white">
              Kasus Kekerasan Fisik
            </li>
          </ul>
        </div>

        {/* === KOLOM 3: DUKUNGAN === */}
        <div className="section6-support w-full lg:w-1/5 mt-8 lg:mt-0">
          <h3 className="text-[#C9A875] text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-12 text-center lg:text-left">
            Dukungan
          </h3>
          <ul className="text-white text-sm sm:text-base w-full text-center lg:text-left">
            <li className="pb-2.5 mb-2.5">
              <button
                onClick={scrollToProfesionalitas}
                className="hover:underline cursor-pointer text-left"
              >
                Profesionalitas
              </button>
            </li>
            <li className="pb-2.5 mb-2.5">
              <button
                onClick={hubungiKami}
                className="hover:underline cursor-pointer text-left"
              >
                Hubungi Kami
              </button>
            </li>
            <li className="pb-2.5 mb-2.5">
              <button
                onClick={scrollToTentangKami}
                className="hover:underline cursor-pointer text-left"
              >
                Tentang Kami
              </button>
            </li>
            <li className="pb-2.5 mb-2.5">
              <button
                onClick={sistemBantuan}
                className="hover:underline cursor-pointer text-left"
              >
                Sistem Bantuan
              </button>
            </li>
            <li className="pb-2.5 mb-2.5">
              <button
                onClick={kebijakanPengembalian}
                className="hover:underline cursor-pointer text-left"
              >
                Kebijakan Pengembalian
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* KEMBALIKAN lg:flex-row MENJADI min-[1056px]:flex-row */}
      <div className="section6-row2 flex flex-col min-[1056px]:flex-row min-[1056px]:justify-between items-center min-[1056px]:items-start w-full max-w-7xl text-white font-georgia mt-12 lg:mt-20 gap-12">
        {/* Nomor Telpon */}
        {/* TAMBAHKAN KEMBALI LOGIKA RESPONSIVE DENGAN BREAKPOINT BARU */}
        <div className="section6-contact flex flex-col items-center text-center gap-4 min-[1056px]:flex-row min-[1056px]:items-start min-[1056px]:text-left min-[1056px]:gap-x-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#C9A875] md:w-[60px] md:h-[60px] flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg md:text-xl lg:text-2xl">
              Nomor Telpon
            </h4>
            <p className="text-sm md:text-base mt-1">+62 812-3456-7890</p>
          </div>
        </div>

        {/* Email */}
        <div className="section6-contact flex flex-col items-center text-center gap-4 min-[1056px]:flex-row min-[1056px]:items-start min-[1056px]:text-left min-[1056px]:gap-x-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#C9A875] md:w-[60px] md:h-[60px] flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg md:text-xl lg:text-2xl">Email</h4>
            <p className="text-sm md:text-base mt-1">
              advokat@luxaralawfirm.com
            </p>
          </div>
        </div>

        {/* Lokasi */}
        <div className="section6-contact flex flex-col items-center text-center gap-4 min-[1056px]:flex-row min-[1056px]:items-start min-[1056px]:text-left min-[1056px]:gap-x-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#C9A875] md:w-[60px] md:h-[60px] flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg md:text-xl lg:text-2xl">Lokasi</h4>
            <p className="text-sm md:text-base mt-1 leading-tight max-w-xs">
              Ruho Menara Legalitas Lantai 12, Unit 1203 Jl.Prof.Dr.Satrio
              No.88, Kawasan mega kuningan, Kel. Karet Kuningan, Kec. Setiabudi
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Copyright */}
      <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-7xl text-white/70 font-georgia text-base sm:text-lg lg:text-2xl mt-12 lg:mt-20 text-center lg:text-left">
        <p>© 2025 Luxara Lawfirm</p>
        <p className="mt-1">Developer Website & SEO oleh Caesar Agency</p>
      </div>
    </section>
  );
}
