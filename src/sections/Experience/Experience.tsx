import SectionHeader from "@/components/Ui/SectionHeader"

const experiences = [
    {
        role: "Front-End Developer",
        company: "Al Almiya Alhura",
        description: "Build modern E-commerce , Admin Dashboard and Landing page with modern Technology",
        period: "2026 - Present",
        tech: ["Next.js", "React.js", "Typescript", "Zod", "Tanstack Query",]
    },
    {
        role: "Software Sales",
        company: "Transition Agency",
        description: "Experience to build stratiges for software Projects and dealing with Customers",
        period: "Oct 2024 - Mar 2026",
        tech: ["Sales experienced", "Negotiation",]

    },
    {
        role: "Software Sales",
        company: "Azzrak Agency",
        description: "Worked in software sales within the Saudi market and building client strategies.",
        period: "Mar 2024 - Oct 2024",
        tech: ["Communication", "Negotiation", "Client Relations",]
    },
    {
        role: "Front-End Intern",
        company: "Azzrak Agency",
        description: "Learned frontend fundamentals and responsive web design through real-world projects.",
        period: "Nov 2023 - Mar 2024",
        tech: ["React.js", "Sala experienced", "SEO",]
    },
    {
        role: "Document Specialist",
        company: "Yec Organization",
        description: "",
        period: "Sep 2022 - Jan 2023",
        tech: ["Document Management", "Data Entry", "Communication Skills"]
    },
]


export default function Experience() {
    return (
        <section id="experience" className="py-32 relative">
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-60 rounded-full blur-3xl bg-primary/10" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader title="Experience that" description="A timeline of my growth as a developer, from learning the fundamentals to building Front-End websites." badge="Experience" highlight="speaks volumes" />

                <div className="relative  mt-14">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                    <div className="space-y-12">
                        {
                            experiences.map((experience, index) => {
                                return (
                                    <div key={index} className="relative grid md:grid-cols-2 gap-8">
                                        <div className="absolute w-3 h-3 left-0 md:left-1/2 top-0  bg-primary md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]">
                                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                        </div>
                                        {/* Content */}
                                        <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                            <div className=" p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                                                <span className="text-primary text-sm font-medium">{experience.period}</span>
                                                <h3 className="text-xl font-semibold mt-2">
                                                    {experience.role}
                                                </h3>
                                                <p className="text-gray-500">{experience.company}</p>
                                                <p className="text-sm text-gray-400 mt-4">{experience.description}</p>
                                                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                                    {
                                                        experience.tech.map((tec, techIndex) => {
                                                            return (
                                                                <span className="px-3 py-1 bg-surface text-sx rounded-full text-gray-300" key={techIndex}>
                                                                    {tec}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </section>
    )
}
