import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { SiGithub } from "@icons-pack/react-simple-icons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "angel's minecraft mods",
  description: "lowkey the best minecraft mods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex h-16 shrink-0 border-b px-4 justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="https://avatars.githubusercontent.com/u/50461810" // replace with your actual GitHub avatar URL
              alt="sillyangel"
              className="rounded-full w-10 h-10"
              width={40}
              height={40}
            />
            {/* Laptop or larger header */}
            <h1 className="text-2xl font-bold hidden md:block">angel&apos;s awesome minecraft mods</h1>
            {/* Mobile header */}
            <h1 className="text-sm font-bold md:hidden">angel&apos;s awesome minecraft mods</h1>

          </div>
          <a
            href="https://github.com/sillyangel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="w-12 h-12 text-gray-300"/>
          </a>
        </header>
        {children}
        
      </body>
    </html>
  );
}
