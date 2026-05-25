"use client"

import Link from "next/link"
// import LinkButton from "../Ui/LinkButton"
// import { Download } from "lucide-react"
import { motion } from "framer-motion"

interface MobileNav {
    navOpen: boolean,
    setNavOpen: (value: boolean) => void
}

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
]

export default function MobileNav({ navOpen, setNavOpen }: MobileNav) {
    return (
        <motion.div
            className="fixed inset-0 z-40 lg:hidden bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.aside
                className="fixed top-0 right-0 z-50 h-full w-[75%] sm:w-[60%] bg-surface/95 backdrop-blur-md border border-border flex flex-col items-center justify-center px-6"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <ul className="w-full">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={()=> setNavOpen(false)}
                        >
                            <Link href={link.href}  className="block w-full text-center py-6 px-6 rounded-lg text-xl font-medium text-text border border-transparent transition-all hover:bg-primary/10 hover:text-primary hover:border-border">
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                    <motion.li
                        className="mt-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: navLinks.length * 0.1 }}
                    >
                        {/* <LinkButton text="Download Cv" rounded iconPosition="left" icon={Download} href="/" /> */}
                    </motion.li>
                </ul>
            </motion.aside>
        </motion.div>
    )
}