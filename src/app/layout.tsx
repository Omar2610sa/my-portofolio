'use client';

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/sections/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import ScrollToTop from "@/components/ScroolToTop/ScrollTop";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.className, poppins.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <AnimatePresence>
          {isLoading && <Loader />}
        </AnimatePresence>

        {/* باقي الـ content بتظهر بعد اختفاء الـ loader */}
        {!isLoading && (
          <>
            <Navbar />
            <Suspense fallback={null}>
              {children}
            </Suspense>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
}