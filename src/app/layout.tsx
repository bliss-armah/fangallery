import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AntigravityBackground from "@/components/AntigravityBackground";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fan Gallery | Premium Creative Agency",
  description:
    "Specializing in Graphic Design, Photography, and Videography. Unlocking visual experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased selection:bg-white selection:text-black`}
      >
        <AntigravityBackground />
        <Header />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
