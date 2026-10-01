import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ weight: "400", subsets: ["latin"] });

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
