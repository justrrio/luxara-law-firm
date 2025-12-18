"use client";

import Image from "next/image";
import { useState } from "react";
import { useGsapHover } from "@/hooks/useGsapButtonHover";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useWhatsApp } from "../../../contexts/WhatsAppContext.js";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { hubungiKami, sistemBantuan, kebijakanPengembalian } = useWhatsApp();

  // Menu data with ids for scroll target
  const menuItems = [
    { text: "Tentang Kami", id: "tentang-kami" },
    { text: "Tim Advokat", id: "tim-kami" },
    { text: "Layanan", id: "profesionalitas" },
    { text: "Kontak", id: "kontak" },
  ];

  // Hook refs - called at top level (not in callbacks)
  const contactBtnRef = useGsapHover();
  const menuRef1 = useGsapHover();
  const menuRef2 = useGsapHover();
  const menuRef3 = useGsapHover();
  const menuRef4 = useGsapHover();

  // Store refs in array for easy access during rendering
  const menuRefs = [menuRef1, menuRef2, menuRef3, menuRef4];

  // Scroll function
  const scrollToClick = (id) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: `#${id}`, offsetY: 80 }, // adjust offset for navbar height
      ease: "power2.inOut",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="w-full min-h-16 md:min-h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-32">
        {/* Logo */}
        <a
          className="flex gap-2 md:gap-5 cursor-pointer items-center"
          onClick={() => scrollToClick("hero")}
        >
          <Image
            src="/section-1/logo.svg"
            alt="Luxara Law Firm Logo"
            width={32}
            height={32}
            className="w-8 h-8 md:w-11 md:h-11 xl:w-12 xl:h-12"
          />
          <Image
            src="/section-1/text-logo.png"
            alt="Luxara Law Firm Text Logo"
            width={100}
            height={40}
            className="h-6 w-auto md:h-8 xl:h-10 object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex px-6 lg:px-10 py-3 bg-white/10 backdrop-blur-lg rounded-full">
          <ul className="flex gap-4 xl:gap-8">
            {menuItems.map(({ text, id }, i) => (
              <li
                key={id}
                ref={menuRefs[i]}
                onClick={() => scrollToClick(id)}
                className="cursor-pointer text-sm lg:text-md xl:text-base relative overflow-hidden"
              >
                <a className="relative block">
                  <span className="btn-text-default absolute inset-0 flex items-center justify-center">
                    {text}
                  </span>
                  <span className="btn-text-hover absolute inset-0 flex items-center justify-center">
                    {text}
                  </span>
                  <span className="invisible">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <a
          ref={contactBtnRef}
          className="hidden md:flex px-6 lg:px-10 py-3 bg-white/10 backdrop-blur-lg rounded-full cursor-pointer relative overflow-hidden text-sm xl:text-base"
          onClick={hubungiKami}
        >
          <span className="btn-text-default absolute inset-0 flex items-center justify-center">
            Hubungi Kami
          </span>
          <span className="btn-text-hover absolute inset-0 flex items-center justify-center">
            Hubungi Kami
          </span>
          <span className="invisible">Hubungi Kami</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col gap-4 p-6">
            <li
              onClick={() => scrollToClick("tentang-kami")}
              className="cursor-pointer text-sm"
            >
              Tentang Kami
            </li>
            <li
              onClick={() => scrollToClick("tim-kami")}
              className="cursor-pointer text-sm"
            >
              Tim Advokat
            </li>
            <li
              onClick={() => scrollToClick("profesionalitas")}
              className="cursor-pointer text-sm"
            >
              Layanan
            </li>
            <li
              onClick={() => scrollToClick("kontak")}
              className="cursor-pointer text-sm"
            >
              Kontak
            </li>
            <li className="pt-4 text-sm">
              <a
                className="block w-full text-center px-6 py-3 bg-white/20 rounded-full cursor-pointer hover:bg-white/30 transition-colors"
                onClick={hubungiKami}
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
