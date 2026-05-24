"use client"

import { useEffect, useState } from "react"
import Logo from "./Logo"
import Link from "next/link"
import LinkButton from "../Ui/LinkButton"
import { Download, MenuIcon, X } from "lucide-react"
import MobileNav from "./MobileNav"


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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-2xl" : "bg-transparent"}`}>
            <div className="w-[95%] lg:w-[90% mx-auto h-16 flex items-center justify-between">
                {/* Logo */}
                <Logo />

                {/* Desctop Nav */}
                <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link href={link.href} className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:text-primary hover:bg-surface">
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="hidden lg:block">
                    <LinkButton text="Download Cv" rounded iconPosition="left" icon={Download} href="/" />
                </div>

                <button
                    onClick={() => setNavOpen(!navOpen)}
                    className="z-90 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition">
                    {
                        navOpen ?<>  <X size={22} /> <MobileNav navOpen={navOpen}/> </>  : <MenuIcon size={22} />
                    }
                </button>
            </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav navOpen={navOpen} />
</>
    )
}
