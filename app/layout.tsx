import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

/* Space Grotesk: tipografía única para todo el portfolio */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Giancarlo Serassio — Industrial 3D Designer",
  description:
    "Industrial design portfolio: 3D modeling, photorealistic rendering and product animation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050810] text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
