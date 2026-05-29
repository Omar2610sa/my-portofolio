'use client';

import { useInView } from 'react-intersection-observer';
import SectionHeader from '@/components/Ui/SectionHeader';
import { SkillCard } from '@/components/Ui/SkillsCard';
import { useTranslation } from 'react-i18next';

const skillsData = [
    { name: 'Next.js', percentage: 85 },
    { name: 'React.js', percentage: 90 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'HTML 5', percentage: 100 },
    { name: 'CSS', percentage: 95 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'TanStack Query', percentage: 80 },
    { name: 'Git', percentage: 95 },
    { name: 'GitHub', percentage: 90 },
]

export default function Skills() {
    const { t } = useTranslation()
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        <section id="skills" className="relative overflow-hidden py-24" ref={ref}>
            {/* Gradient accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-primary/5" />

            <div className="relative z-10 w-[90%] max-w-4xl mx-auto">
                <div data-aos="fade-up">

                    <SectionHeader
                        badge={t('skills.badge')}
                        title={t('skills.titlePrefix')}
                        highlight={t('skills.highlight')}
                        description={t('skills.description')}
                    />
                </div>
                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            name={skill.name}
                            percentage={skill.percentage}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

