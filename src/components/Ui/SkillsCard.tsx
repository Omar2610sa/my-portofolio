"use client"
import { useEffect, useState } from 'react';

interface SkillCardProps {
    name: string;
    percentage: number;
    inView: boolean;
}

export function SkillCard({ name, percentage, inView }: SkillCardProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!inView) return;

        const timer = setTimeout(() => {
            setProgress(percentage);
        }, 100);

        return () => clearTimeout(timer);
    }, [inView, percentage]);

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-text">{name}</h3>
                <span className="text-primary font-bold">
                    {inView ? (
                        <span className="transition-all duration-1000">
                            {progress}%
                        </span>
                    ) : (
                        '0%'
                    )}
                </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden border border-border">
                <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${progress}%` : '0%' }}
                />
            </div>
        </div>
    )
}