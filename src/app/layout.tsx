import Footer from "@/components/sections/footer/footer";
import Navbar from "@/components/sections/navbar/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto min-h-dvh max-w-2xl border-x border-border px-6">
            <Navbar />

            <div className="-mx-6 border-b border-border" aria-hidden="true" />

            {children}

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
