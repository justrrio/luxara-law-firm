import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useGsapHover() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const defaultText = el.querySelector(".btn-text-default");
    const hoverText = el.querySelector(".btn-text-hover");

    if (!defaultText || !hoverText) return;

    // Initial states
    gsap.set(defaultText, { opacity: 1, y: 0, scale: 1});
    gsap.set(hoverText, {
      opacity: 0,
      y: 20,
      scale: 1.1,
      filter: "blur(3px)",
    });

    const onEnter = () => {
      gsap.to(defaultText, {
        opacity: 0,
        y: -20,
        scale: 0.9,
        filter: "blur(3px)",
        duration: 0.4,
        ease: "power3.inOut",
      });
      gsap.to(hoverText, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power3.inOut",
      });
    };

    const onLeave = () => {
      gsap.to(defaultText, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power3.inOut",
      });
      gsap.to(hoverText, {
        opacity: 0,
        y: 20,
        scale: 1.1,
        filter: "blur(3px)",
        duration: 0.4,
        ease: "power3.inOut",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}
