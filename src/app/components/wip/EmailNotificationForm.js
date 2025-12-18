"use client";

import { useState } from "react";

export default function EmailNotificationForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  // Email validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Simulate API call
    setStatus("loading");
    setErrorMessage("");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success (in production, this would be an actual API call)
    setStatus("success");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  return (
    <section className="w-full px-4 py-8 md:py-12 animate-fade-in-up-delay-4">
      <div className="max-w-xl mx-auto">
        {status === "success" ? (
          /* Success State */
          <div className="text-center p-6 rounded-2xl bg-[var(--wip-accent-light)] border border-[var(--wip-accent)]">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--wip-success)] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              You are on the list!
            </h3>
            <p className="text-[var(--wip-text-muted)]">
              We will notify you at <strong className="text-[var(--foreground)]">{email}</strong> when we launch.
            </p>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <p className="text-[var(--wip-text-muted)] text-base md:text-lg">
                Be the first to know when we launch
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email for updates"
                  disabled={status === "loading"}
                  aria-describedby={errorMessage ? "email-error" : undefined}
                  aria-invalid={status === "error"}
                  className={`
                    w-full px-5 py-4 text-base
                    bg-[var(--background)] 
                    border-2 rounded-xl
                    text-[var(--foreground)]
                    placeholder:text-[var(--wip-text-muted)]
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-[var(--wip-accent)] focus:border-transparent
                    disabled:opacity-60 disabled:cursor-not-allowed
                    ${status === "error" 
                      ? "border-[var(--wip-error)] focus:ring-[var(--wip-error)]" 
                      : "border-[var(--wip-border)] hover:border-[var(--wip-accent)]"
                    }
                  `}
                />
                {status === "error" && errorMessage && (
                  <p
                    id="email-error"
                    className="absolute -bottom-6 left-0 text-sm text-[var(--wip-error)]"
                    role="alert"
                  >
                    {errorMessage}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                aria-label={status === "loading" ? "Submitting..." : "Notify me when launched"}
                className={`
                  px-8 py-4 text-base font-semibold
                  bg-[var(--wip-accent)] text-white
                  rounded-xl
                  transition-all duration-200
                  hover:shadow-lg hover:shadow-[var(--wip-accent-light)]
                  hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-[var(--wip-accent)] focus:ring-offset-2
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                  whitespace-nowrap
                  ${status === "loading" ? "cursor-wait" : ""}
                `}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  "Notify Me"
                )}
              </button>
            </div>

            {/* Privacy note */}
            <p className="text-center text-sm text-[var(--wip-text-muted)] mt-8">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
