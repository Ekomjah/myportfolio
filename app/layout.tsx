import type { Metadata } from "next";
import { geistMono, geistSans } from "@/app/ui/fonts";
import "./globals.css";
import Navbar from "@/app/ui/Navbar";
import { ThemeProvider } from "@/app/ui/ThemeProvider";

import { Toaster } from "sonner";
import Footer from "./ui/footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Ekomjah Denis | Full-stack Developer",
  description:
    "Portfolio of Ekomjah Denis, a Full-stack Software Developer building quality software with great aesthetics and user experience.",
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
