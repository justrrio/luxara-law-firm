export default function WIPHero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32 wip-gradient-bg">
      {/* Logo / Brand */}
      <div className="animate-fade-in-up mb-8 md:mb-12">
        <div className="flex items-center gap-3">
          {/* Decorative Logo Icon */}
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[var(--wip-accent)] flex items-center justify-center shadow-lg shadow-[var(--wip-accent-light)]">
            <span className="text-white text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Georgia' }}>
              L
            </span>
          </div>
          <span 
            className="text-2xl md:text-3xl font-semibold tracking-wide text-[var(--foreground)]"
            style={{ fontFamily: 'Georgia' }}
          >
            LUXARA
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
        {/* Heading */}
        <h1 
          className="animate-fade-in-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight"
        >
          We're Building Something...{" "}
          <span className="text-[var(--wip-accent)]">Extraordinary</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-2 text-lg md:text-xl lg:text-2xl text-[var(--wip-text-muted)] max-w-2xl mx-auto leading-relaxed">
          Your trusted legal partner is evolving. We're crafting a modern platform 
          to serve you better with excellence and integrity.
        </p>

        {/* Progress Section */}
        <div className="animate-fade-in-up-delay-3 pt-6 md:pt-8 space-y-4">
          {/* Progress Bar Container */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-[var(--wip-text-muted)]">Progress</span>
              <span className="text-sm font-semibold text-[var(--wip-accent)]">70%</span>
            </div>
            <div className="h-3 bg-[var(--wip-border)] rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full animate-progress-pulse animate-shimmer"
                style={{ width: '70%' }}
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Development progress: 70% complete"
              />
            </div>
          </div>

          {/* Launch Date */}
          <div className="flex items-center justify-center gap-2 text-[var(--wip-text-muted)]">
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
