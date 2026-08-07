import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar-section/Navbar";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Devraj",
    template: "%s | Devraj",
  },
  description:
    "Software Engineer building distributed systems, real-time applications, and developer tools.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-mono",
        jetbrainsMono.variable,
        interHeading.variable,
      )}
    >
      <body className="min-h-screen bg-background text-foreground">
        <main className="mx-auto min-h-dvh max-w-2xl border-x border-border px-6">
          <Navbar />
          <div className="-mx-6 border-b border-border" aria-hidden="true" />

          {children}
        </main>
      </body>
    </html>
  );
}
