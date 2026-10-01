import type { Metadata } from "next";
import { geistMono, geistSans } from "@/app/ui/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ui/ThemeProvider";

import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ekomjah Denis | Full-stack Developer",
  description:
    "Portfolio of Ekomjah Denis, a Full-stack Software Developer building quality software with great aesthetics and user experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased max-[800px]:text-[10px] max-[580px]:text-[7px] motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position="top-right" duration={1000} />
      </body>
    </html>
  );
}
