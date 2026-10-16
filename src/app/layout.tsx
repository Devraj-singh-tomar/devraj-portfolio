import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Devraj Singh Tomar",
    template: "%s | Devraj Singh Tomar",
  },
  description:
    "Developer portfolio of Devraj Singh Tomar, featuring full-stack projects, real-time systems, AI, and engineering writing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-dvh font-sans"
        // className="min-h-full mx-auto sm:max-w-xl pt-7 pb-10 px-5 sm:px-4 font-sans"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delay={0}>
            <div className="min-h-dvh mx-auto max-w-xl px-5 pt-7 pb-10 sm:px-4 flex flex-col w-full gap-6">
              <Header />

              <main id="main-content" className="flex-1">
                {children}
              </main>

              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
