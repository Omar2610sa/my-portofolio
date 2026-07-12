"use client"
import ProjecCard from "@/components/Project/ProjecCard"
import SectionHeader from "@/components/Ui/SectionHeader"
import { useTranslation } from "react-i18next"

export default function Projects() {
    const { t } = useTranslation()
    const projects = [

        {
            title: "Luxary E-commerce",
            description: t('projects.items.luxary.description'),
            image: "/assets/Projects/luxary.png",
            tags: ["Next 16", "Typescript", "Tailwind", "Framer motions", "ShadCn", "REST APIs", "i18n", "Swiper.js"],
            liveUrl: "https://luxury-ecommerce-umber.vercel.app/",
        },
        {
            title: "Eraf Page",
            description: t('projects.items.eraf.description'),
            image: "/assets/Projects/eraf.png",
            tags: ["React.js", "Typescript", "Tailwind", "AOS", "Framer motions", "Axios", "REST APIs", "i18n", "App Router", "Swiper.js"],
            liveUrl: "https://eraf-project.vercel.app/",
        },
        {
            title: "Tamkeen",
            description: t('projects.items.tamkeen.description'),

            image: "/assets/Projects/tamkeen.png",
            tags: ["Next.js", "Typescript", "Tailwind", "AOS animation", "REST APIs", "i18n", "Yup"],
            liveUrl: "https://tamkeen-main.vercel.app/",
        },
        {
            title: "Admin Dashboard",
            description: t('projects.items.admin.description'),
            image: "/assets/Projects/Dashboard.png",
            tags: ["React.js", "Typescript", "Tanstack Query", "ShadCn", "Yup"],
            liveUrl: "https://admin-base-dashboard-bqidnxijp-omar-salams-projects.vercel.app/",
        },
        {
            title: "Indore Plants",
            description: t('projects.items.plants.description'),
            image: "/assets/Projects/Plant indor.png",
            tags: ["React.js", "Typescript", "Aos Animation", "MUI library"],
            liveUrl: "https://omar2610sa.github.io/IndorePlants/",
        },
        {
            title: "Wealth Home",
            description: t('projects.items.wealth.description'),
            image: "/assets/Projects/Wealt home.png",
            tags: ["React.js", "Javascript",],
            liveUrl: "https://omar2610sa.github.io/Wealt-home-RE-Website/",
        },
        {
            title: "Old Portfolio",
            description: t('projects.items.old.description'),
            image: "/assets/Projects/Old portofolio.png",
            tags: ["HTML 5", "CSS", "Javascript"],
            liveUrl: "https://omar2610sa.github.io/Cv-2/",
        },
    ]

    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-60 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] max-w-6xl mx-auto space-y-12">
                <div data-aos="fade-up">
                    <SectionHeader badge={t('projects.badge')} title={t('projects.titlePrefix')} highlight={t('projects.highlight')} description={t('projects.description')} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 ">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} data-aos="fade-down">
                                    <ProjecCard title={project.title} description={project.description} image={project.image} liveUrl={project.liveUrl} tags={project.tags} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
