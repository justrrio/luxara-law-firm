import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppProvider } from "../contexts/WhatsAppContext.js";
import Navbar from "./components/layouts/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// WIP Mode - hide navbar and other UI elements
const SHOW_WIP = process.env.NEXT_PUBLIC_SHOW_WIP === "true";

export const metadata = {
  title: SHOW_WIP ? "Coming Soon | Luxara Law Firm" : "Luxara Law Firm | Firma Hukum Profesional",
  description: SHOW_WIP 
    ? "Luxara Law Firm is evolving. Join our waitlist to be the first to know when we launch our new legal services platform. Excellence • Integrity • Trust."
    : "Luxara Law Firm - Firma hukum profesional dengan tim advokat berpengalaman. Layanan hukum terpercaya untuk kebutuhan Anda.",
  keywords: ["law firm", "legal services", "Luxara", "attorney", "lawyer", "firma hukum"],
  openGraph: {
    title: SHOW_WIP ? "Coming Soon | Luxara Law Firm" : "Luxara Law Firm",
    description: SHOW_WIP 
      ? "Luxara Law Firm is evolving. Join our waitlist to be the first to know when we launch."
      : "Firma hukum profesional dengan tim advokat berpengalaman.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {SHOW_WIP ? (
          // WIP Mode: No navbar, no providers - clean minimal page
          children
        ) : (
          // Normal Mode: Full site with navbar and providers
          <WhatsAppProvider>
            <Navbar />
            {children}
          </WhatsAppProvider>
        )}
      </body>
    </html>
  );
}

