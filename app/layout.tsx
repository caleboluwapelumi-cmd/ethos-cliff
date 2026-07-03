import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

const lemonMilkBold = localFont({
  src: "../public/fonts/lemon-milk/LemonMilkbold.otf",
  variable: "--font-lemon-milk-bold",
  weight: "700",
  display: "swap",
});

const lemonMilkLight = localFont({
  src: "../public/fonts/lemon-milk/LemonMilklight.otf",
  variable: "--font-lemon-milk-light",
  weight: "300",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethos Cliff — The Cutting Edge of Brand Visibility",
  description:
    "We don't just brand businesses. We give them a voice, a face, and a fighting chance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lemonMilkBold.variable} ${lemonMilkLight.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        <CustomCursor />
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
