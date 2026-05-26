'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import DotGrid from '@/components/Hero/Background'
import LinkButton from '@/components/Ui/LinkButton'
import { ArrowRight } from 'lucide-react'
import logo from "../../../public/assets/5807884988358266879.jpg"
import Image from 'next/image'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const el = useRef(null);
    const typed = useRef<Typed | null>(null);
    const { t } = useTranslation()


    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: [
                'Front-End Developer ◦ Next.js Specialist',
                'Software Engineer',
                'Experienced Sales',
            ],
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 800,
            loop: true,
        });

        return () => {
            typed.current?.destroy();
        };
    }, []);

    return (
        <section id='home' className='relative min-h-screen overflow-hidden flex items-center pt-30 py-10'>
            <div className='absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-60 rounded-full blur-3xl bg-primary/10' />

            {/* Background */}
            <div className='absolute inset-0'>
                <DotGrid
                    dotSize={5}
                    gap={12}
                    baseColor="#SF293A"
                    activeColor="#20b2a6"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* Content */}
            <div className='relative z-10 w-[90%] grid grid-cols-1 mx-auto lg:grid-cols-2 items-center text-center md:text-start'>

                {/* content text */}
                <div className='space-y-6'>
                    <span className='inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-md border border-border'>
                        <span ref={el} />
                    </span>

                    <h1 data-aos="fade-up" data-aos-delay="200" className='text-primary text-4xl md:text-5xl font-bold leading-tight capitalize text-text'>
                        {t('hero.headline')} <span className='text-primary/70'>{t("hero.headlineHighlight")}</span>
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="400" className='text-gray-300 max-w-lg tracking-wide'>
                        {t("hero.description")}
                    </p>

                    <div data-aos="fade-up" className='flex items-center justify-center md:justify-start gap-4 pt-2'>
                        <LinkButton href='#contact' text={t("hero.getInTouch")} icon={ArrowRight} rounded />
                        <LinkButton href='#projects' text={t("hero.viewProjects")} variant='outline' rounded />
                    </div>
                </div>

                {/* Image */}
                <div data-aos="fade-left" className='flex justify-center lg:justify-end mt-12'>
                    <div className='relative w-85 h-85 md:w-110 md:h-110 rounded-full border border-border flex items-center justify-center'>
                        <div className='absolute z-10 inset-0 rounded-full bg-primary/20 blur-3xl' />
                        <Image
                            src={logo}
                            alt="Omar"
                            className='rounded-full object-cover z-20'
                            fill
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}