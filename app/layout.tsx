import type { Metadata, Viewport } from "next";
import { geistMono, geistSans } from "@/app/ui/fonts";
import "./globals.css";
import Navbar from "@/app/ui/Navbar";
import { ThemeProvider } from "@/app/ui/ThemeProvider";

import { Toaster } from "sonner";
import Footer from "./ui/footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL = "https://ekomjahdenis.vercel.app";
const NAME = "Ekomjah Denis";
const TITLE = `${NAME} — Full-stack Developer`;
const DESCRIPTION =
  "Ekomjah Denis is a full-stack developer building and shipping web applications end to end, from page-load performance and design systems to authentication, cloud infrastructure and deployment. He works in TypeScript, React and Next.js, with Python, AWS and Terraform behind them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s | ${NAME}`,
  },
  description: DESCRIPTION,

  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  keywords: [
    "Ekomjah Denis",
    "full-stack developer",
    "web developer",
    "portfolio",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "Express",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Terraform",
    "Tailwind CSS",
    "REST API",
    "serverless",
    "K-12 financial literacy",
  ],
  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "motion-safe:scroll-smooth", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Navbar />
          {children}

          <Footer />
        </ThemeProvider>
        <Toaster position="top-right" duration={1000} />
      </body>
    </html>
  );
}