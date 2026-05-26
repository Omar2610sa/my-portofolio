import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/sections/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import ScrollToTop from "@/components/ScroolToTop/ScrollTop";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: "Omar Portofolio",
  description: "Welcome to my Portofolio",
  icons: "/assets/code-xml.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
      className={cn("h-full", "antialiased", poppins.className, poppins.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Loader/>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        </body>
    </html>
  );
}
