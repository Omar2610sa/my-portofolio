import ProjecCard from "@/components/Project/ProjecCard"
import SectionHeader from "@/components/Ui/SectionHeader"

const projects = [
    
    {
        title: "Tamkeen",
        description: "Professional recruitment and career consulting platform designed to connect qualified talents with leading opportunities across the Saudi and Gulf markets.",
        image: "/assets/Projects/tamkeen.png",
        tags: ["Next.js", "Typescript",],
        liveUrl: "",
    },
    {
        title: "Eraf Page",
        description: "A modern home healthcare platform providing trusted medical and patient care services with a seamless and user-friendly experience.",
        image: "/assets/Projects/eraf.png",
        tags: ["React.js", "Typescript"],
        liveUrl: "https://eraf-project.vercel.app/",
    },
    {
        title: "Admin Dashboard",
        description: "Ecommerce management dashboard featuring product control, order management, analytics, and responsive UI built for seamless administration.",
        image: "/assets/Projects/dashboard.png",
        tags: ["React.js", "Typescript", "Tanstack Query", "ShadCn"],
        liveUrl: "",
    },
    {
        title: "Indore Plants",
        description: "Nature-inspired landing page designed to showcase the positive impact of plants through a modern and clean user experience.",
        image: "/assets/Projects/Plant indor.png",
        tags: ["React.js", "Typescript", "Aos Animation"],
        liveUrl: "",
    },
    {
        title: "Wealth Home",
        description: "Real estate web application focused on simplifying property search and helping users find places that truly feel like home.",
        image: "/assets/Projects/Wealt home.png",
        tags: ["React.js", "Javascript",],
        liveUrl: "",
    },
]


export default function Projects() {
    return (
        <section className="py-24 relative">
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-60 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] max-w-6xl mx-auto space-y-12">

                <SectionHeader badge="Projects" title="Some of my recent" highlight="work" description="A selection of projects showcasing my ability to design, build, and scale modern fullstack applications." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 ">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index}>
                                    <ProjecCard  title={project.title}   description={project.description} image={project.image} liveUrl={project.liveUrl} tags={project.tags} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
