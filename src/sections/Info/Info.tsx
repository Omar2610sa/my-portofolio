'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users2Icon, Code2Icon, Zap, Award } from "lucide-react"

const stats = [
    {
        icon: Code2Icon,
        count: 45,
        title: 'Projects'
    },
    {
        icon: Users2Icon,
        count: 13,
        title: 'Clients'
    },
    {
        icon: Zap,
        count: 10,
        title: 'Skills'
    },
    {
        icon: Award,
        count: 5,
        title: 'Certificates'
    }
]

export default function InfoSection() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <section id="info" className="relative overflow-hidden py-12 bg-primary/10" ref={ref}>
            {/* Gradient accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-primary/5" />

            <div className="relative z-10 w-[90%] max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center text-center space-y-3 p-4 border border-border rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                            >
                                <div className="w-16 h-16 flex justify-center items-center border-2 border-primary rounded-full">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                {inView ? (
                                    <span className="text-4xl font-bold text-text">
                                        <CountUp
                                            end={stat.count}
                                            duration={2}
                                            separator=","
                                        />
                                    </span>
                                ) : (
                                    <span className="text-4xl font-bold text-text">0</span>
                                )}
                                <p className="text-lg text-gray-300">{stat.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}