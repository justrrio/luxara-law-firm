import Section1 from "./components/section-1/Section1";
import Section2 from "./components/section-2/Section2";
import Section3 from "./components/section-3/Section3";
import Section4 from "./components/section-4/Section4";
import Section5 from "./components/section-5/Section5";
import Section6 from "./components/section-6/Section6";

// ============================================
// WIP MODE CONFIGURATION
// Set to true to show WIP page, false to show main site
// Can also be controlled via environment variable:
// NEXT_PUBLIC_SHOW_WIP=true in .env.local or Vercel
// ============================================
const SHOW_WIP = process.env.NEXT_PUBLIC_SHOW_WIP === "true";

// WIP Page Component
function WIPPage() {
  return (
    <main 
      className="min-h-screen w-full grid-background flex items-center justify-center px-6 py-12 md:px-12 lg:px-16 overflow-hidden"
      aria-label="Work in progress page"
    >
      <div className="max-w-2xl w-full text-center">
        <h1 
          className="animate-fade-in animate-pulse-glow text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-blue-500"
          style={{ letterSpacing: '-0.02em' }}
        >
          Work in Progress
        </h1>

        <p className="animate-fade-in-delay-1 mt-6 text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
          We're building something special
        </p>

        <p className="animate-fade-in-delay-2 mt-6 text-base md:text-lg text-gray-500 dark:text-gray-500 leading-relaxed max-w-xl mx-auto">
          Our team is crafting a new experience for you. We're working hard behind 
          the scenes to bring you something amazing. Stay tuned for updates.
        </p>

        <div 
          className="animate-float mt-12 mx-auto w-3 h-3 rounded-full bg-blue-500 opacity-60"
          aria-hidden="true"
        />

        <p className="animate-fade-in-delay-3 mt-16 text-xs text-gray-300 dark:text-gray-700 font-mono tracking-widest uppercase">
          Luxara Law Firm
        </p>
      </div>
    </main>
  );
}

// Main Site Component
function MainSite() {
  return (
    <section className="flex flex-col">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </section>
  );
}

// Toggle between WIP and Main Site based on config
export default function Home() {
  return SHOW_WIP ? <WIPPage /> : <MainSite />;
}
