import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const $isProductionDeployment = process.env.VERCEL_ENV === "production";

const defaultTitle = `${siteConfig.name} - ${siteConfig.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  robots: {
    index: $isProductionDeployment,
    follow: $isProductionDeployment,
    googleBot: {
      index: $isProductionDeployment,
      follow: $isProductionDeployment,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: defaultTitle,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    creator: "@devraj_st",
    title: defaultTitle,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh font-sans">
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
