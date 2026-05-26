import Logo from '@/components/Navbar/Logo'
import Image from 'next/image'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'

export default function Footer() {
    const socialLinks = [
        {
            icon: LuGithub,
            href: 'https://github.com/Omar2610sa',
            label: 'GitHub'
        },
        {
            icon: LuLinkedin, 
            href: 'https://www.linkedin.com/in/omar-salam-064126257/',
            label: 'LinkedIn'
        },
        {
            icon: LuMail,
            href: 'omarmooataz26@gmail.com',
            label: 'Email'
        }
    ]

    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t border-border py-12">
            {/* Gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2  rounded-full blur-3xl bg-primary/5 pointer-events-none" />

            <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo */}
                    <Logo />

                    {/* Social Links */}
                    <div className="flex items-center gap-4 border border-border rounded-full px-6 py-3 bg-primary/5">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center border-2 border-white rounded-full justify-center  hover:border-primary group transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 text-text group-hover:text-primary" />
                            </a>
                        ))}
                    </div>


                </div>

                {/* Divider */}
                <div className="border-t border-border mt-8 pt-8">
                    <p className="text-center text-md text-gray-500">
                        © {currentYear} Omar Moataz. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}