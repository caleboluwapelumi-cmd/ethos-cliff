import type { Metadata } from "next";
import { Rubik, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${rubik.variable} ${montserrat.variable} h-full antialiased`}
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
