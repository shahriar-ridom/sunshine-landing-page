import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

/* Newsreader — display / editorial font */
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sun-Soaked Living — Solar for Your Home",
  description:
    "Energy independence for the family, designed for comfort. No industrial hardware, just warmth and savings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Satoshi is loaded via @font-face in globals.css from Fontshare CDN */}
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${newsreader.variable} antialiased`}>{children}</body>
    </html>
  );
}
