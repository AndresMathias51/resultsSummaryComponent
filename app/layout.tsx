import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken_grotesk = Hanken_Grotesk({
  variable: "--font-hanken_grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Results Summary Component",
  description: "A simple results summary component built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${hanken_grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
