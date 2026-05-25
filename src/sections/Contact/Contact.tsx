"use client"

import SectionHeader from "@/components/Ui/SectionHeader"
import { Input } from "@base-ui/react"
import { GitBranch, Mail,  MapPin, SendIcon } from "lucide-react"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "omarmooataz26@gmail.com",
        href: "mailto:omarmooataz26@gmail.com",
    },
    {
        icon: GitBranch,
        label: "GitHub",
        value: "Omar2610",
        href: "https://github.com/Omar2610",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Egypt, Mansoura | Cairo",
        href: "#",
    },
]

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">

                {/* Gradient accent */}
                <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-60 rounded-full blur-3xl bg-primary/10" />
                
                {/* Header */}
                <div data-aos="fade-up">
                <SectionHeader 
                    badge="Contact" 
                    description="Have a project in mind? I'd love to hear about it. Let's connect." 
                    title="Let's build" 
                    highlight="something great" 
                />
                </div>

                {/* Content */}
                <div data-aos="fade-down" className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    {/* Left Form */}
                    <form onSubmit={(e) => { e.preventDefault() }} className="p-6 rounded-2xl bg-surface border border-border space-y-5">
                        <h3 className="text-lg font-semibold text-text">
                            Send a message
                        </h3>
                        {/* Name */}
                        <div>
                            <label className="text-sm text-text-muted block mb-1">Name</label>
                            <Input 
                                required 
                                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition" 
                                placeholder="Your Name" 
                                type="text" 
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label className="text-sm text-text-muted block mb-1">Email</label>
                            <Input 
                                required 
                                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition" 
                                placeholder="Your Email" 
                                type="email" 
                            />
                        </div>
                        {/* Phone */}
                        <div>
                            <label className="text-sm text-text-muted block mb-1">Phone</label>
                            <Input 
                                required 
                                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition" 
                                placeholder="Your Phone" 
                                type="tel" 
                            />
                        </div>

                        {/* Submit */}
                        <button className="w-full py-3 rounded-full bg-primary text-gray-200 font-medium hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer">
                            Send Message <SendIcon className="w-4 h-4" />
                        </button>
                    </form>
                    
                    {/* Right Contact Info */}
                    <div className="rounded-3xl p-6">
                        <h3 className="text-xl font-semibold mb-6 text-text">Contact Information</h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <a 
                                        key={index} 
                                        href={item.href}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-gray-400 text-sm">
                                                {item.label}
                                            </div>
                                            <div className="font-medium text-text">
                                                {item.value}
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}