export default function WIPFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:contact@luxara.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full px-4 py-8 md:py-12 border-t border-[var(--wip-border)]">
      <div className="max-w-3xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${link.name}`}
              className="
                p-3 rounded-full
                text-[var(--wip-text-muted)]
                hover:text-[var(--wip-accent)]
                hover:bg-[var(--wip-accent-light)]
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-[var(--wip-accent)] focus:ring-offset-2
              "
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-[var(--wip-text-muted)]">
          © {currentYear} Luxara Law Firm. All rights reserved.
        </p>

        {/* Optional: Tagline */}
        <p className="text-center text-xs text-[var(--wip-text-muted)] mt-2 opacity-60">
          Excellence • Integrity • Trust
        </p>
      </div>
    </footer>
  );
}
