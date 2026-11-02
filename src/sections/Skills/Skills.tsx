'use client';

import { useInView } from 'react-intersection-observer';
import SectionHeader from '@/components/Ui/SectionHeader';
import { SkillCard } from '@/components/Ui/SkillsCard';
import { useTranslation } from 'react-i18next';

const skillGroups = [
    {
        key: 'frontEnd',
        prefixKey: 'skills.skills',
        highlight: 'Front-End',
        skills: [
            { name: 'Next.js', percentage: 85 },
            { name: 'React.js', percentage: 90 },
            { name: 'HTML 5', percentage: 100 },
            { name: 'CSS', percentage: 95 },
            { name: 'Tailwind CSS', percentage: 95 },
            { name: 'TanStack Query', percentage: 80 },
            { name: 'ShadCN UI', percentage: 90 },
            { name: 'Material UI', percentage: 85 },
        ],
    },
    {
        key: 'backEnd',
        prefixKey: 'skills.skills',
        highlight: 'Back-End',
        skills: [
            { name: 'Node.js', percentage: 85 },
            { name: 'Express.js', percentage: 90 },
            { name: 'MongoDB & Mongoose', percentage: 90 },
            { name: 'JWT Authentication', percentage: 85 },
            { name: 'Nest.js', percentage: 75 },
        ],
    },
    {
        key: 'others',
        prefixKey: 'skills.others',
        highlight: '& ' + 'tools',
        isTools: true,
        skills: [
            { name: 'GitHub', percentage: 90 },
            { name: 'Git', percentage: 95 },
            { name: 'VS Code', percentage: 95 },
            { name: 'Postman', percentage: 95 },
            { name: 'Figma', percentage: 80 },
            { name: 'Cloudinary', percentage: 80 },
        ],
    },
];

export default function Skills() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section id="skills" className="relative overflow-hidden py-24" ref={ref}>
            {/* Gradient accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-primary/5" />

            <div data-aos="fade-up" className="relative z-10 w-[90%] max-w-4xl mx-auto">
                <SectionHeader
                    badge={t('skills.badge')}
                    title={t('skills.titlePrefix')}
                    highlight={t('skills.highlight')}
                    description={t('skills.description')}
                />

                {skillGroups.map((group, i) => (
                    <div key={group.key} data-aos="fade-up">
                        <h2
                            className={`text-2xl font-bold text-center flex justify-center gap-2 ${i === 0 ? 'my-10' : 'my-20'
                                }`}
                        >
                            {t(group.prefixKey)}
                            <span className="text-primary">
                                {group.isTools ? `& ${t('skills.tools')}` : group.highlight}
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {group.skills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    name={skill.name}
                                    percentage={skill.percentage}
                                    inView={inView}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}