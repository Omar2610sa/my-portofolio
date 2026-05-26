"use client"
import SectionHeader from "@/components/Ui/SectionHeader";
import { useTranslation } from 'react-i18next';

const experiences = [
    {
        roleKey: 'experience.items.0.role',
        companyKey: 'experience.items.0.company',
        descriptionKey: 'experience.items.0.description',
        periodKey: 'experience.items.0.period',
        techKeys: ['experience.items.0.tech.0', 'experience.items.0.tech.1', 'experience.items.0.tech.2', 'experience.items.0.tech.3', 'experience.items.0.tech.4'],
        fade: 'flip-left',
    },
    {
        roleKey: 'experience.items.1.role',
        companyKey: 'experience.items.1.company',
        descriptionKey: 'experience.items.1.description',
        periodKey: 'experience.items.1.period',
        techKeys: ['experience.items.1.tech.0', 'experience.items.1.tech.1'],
        fade: 'flip-right',
    },
    {
        roleKey: 'experience.items.2.role',
        companyKey: 'experience.items.2.company',
        descriptionKey: 'experience.items.2.description',
        periodKey: 'experience.items.2.period',
        techKeys: ['experience.items.2.tech.0', 'experience.items.2.tech.1', 'experience.items.2.tech.2'],
        fade: 'flip-left',
    },
    {
        roleKey: 'experience.items.3.role',
        companyKey: 'experience.items.3.company',
        descriptionKey: 'experience.items.3.description',
        periodKey: 'experience.items.3.period',
        techKeys: ['experience.items.3.tech.0', 'experience.items.3.tech.1', 'experience.items.3.tech.2'],
        fade: 'flip-right',
    },
    {
        roleKey: 'experience.items.4.role',
        companyKey: 'experience.items.4.company',
        descriptionKey: 'experience.items.4.description',
        periodKey: 'experience.items.4.period',
        techKeys: ['experience.items.4.tech.0', 'experience.items.4.tech.1', 'experience.items.4.tech.2'],
        fade: 'flip-left',
    },
];

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section id="experience" className="py-24 relative">
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-60 rounded-full blur-3xl bg-primary/10" />

            <div className="container mx-auto px-6 relative z-10">
                <div data-aos="fade-up">
                    <SectionHeader
                        title={t('experience.title')}
                        description={t('experience.description')}
                        badge={t('experience.badge')}
                        highlight={t('experience.highlight')}
                    />
                </div>

                <div className="relative  mt-14">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                    <div className="space-y-12">
                        {experiences.map((experience, index) => {
                            return (
                                <div data-aos={experience.fade} key={index} className="relative grid md:grid-cols-2 gap-8">
                                    <div className="absolute w-3 h-3 left-0 md:left-1/2 top-0  bg-primary md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]">
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    </div>
                                    {/* Content */}
                                    <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                        <div className=" p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                                            <span className="text-primary text-sm font-medium">{t(experience.periodKey)}</span>
                                            <h3 className="text-xl font-semibold mt-2">{t(experience.roleKey)}</h3>
                                            <p className="text-gray-500">{t(experience.companyKey)}</p>
                                            <p className="text-sm text-gray-400 mt-4">{t(experience.descriptionKey)}</p>
                                            <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                                {experience.techKeys.map((tecKey, techIndex) => {
                                                    return (
                                                        <span className="px-3 py-1 bg-surface text-sx rounded-full text-gray-300" key={techIndex}>
                                                            {t(tecKey)}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

