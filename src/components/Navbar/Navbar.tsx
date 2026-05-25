"use client"

import { useEffect, useState } from "react"
import Logo from "./Logo"
import Link from "next/link"
import LinkButton from "../Ui/LinkButton"
import { Download, LanguagesIcon, MenuIcon, X } from "lucide-react"
import MobileNav from "./MobileNav"
import { AnimatePresence } from "framer-motion"

const navLinks = [
    {
        href: "#home",
        label: "Home"
    },
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#skills",
        label: "Skills"
    },
    {
        href: "#projects",
        label: "Projects"
    },
    {
        href: "#experience",
        label: "Experience"
    },
    {
        href: "#contact",
        label: "Contact"
    },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${scrolled ? "backdrop-blur-xl" : "bg-transparent"}`}>
                <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex items-center justify-between">
                    <div className={`${navOpen ?"invisible" : ""}`}>
                    <Logo />
                    </div>

                    <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
                        {navLinks.map((link, index) => (
                            <li key={index} >
                                <Link href={link.href}  className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:text-primary hover:bg-surface">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex lg:items-center lg:gap-3">
                        <LinkButton text="Download Cv" rounded iconPosition="left" icon={Download} href="/" />
                        <LanguagesIcon className="w-6 h-6" />
                    </div>

                    <div className="flex justify-between items-center gap-3 lg:hidden">
                        <LanguagesIcon className="w-6 h-6" />
                        <button
                            onClick={() => setNavOpen(!navOpen)}
                            className="z-50 w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition"
                        >
                            {navOpen ? <X size={22} /> : <MenuIcon size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {navOpen && <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />}
            </AnimatePresence>
        </>
    )
}