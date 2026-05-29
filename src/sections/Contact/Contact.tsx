"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SectionHeader from "@/components/Ui/SectionHeader"
import { Input } from "@base-ui/react"
import { GitBranch, Mail, MapPin, SendIcon } from "lucide-react"
import { useTranslation } from "react-i18next"

// Validation Schema
const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
    phone: yup.string().required("Phone is required").matches(/^[0-9+\-\s()]+$/, "Invalid phone number"),
});

interface FormData {
    name: string;
    email: string;
    message: string;
    phone: string;
}

export default function Contact() {
    const { t } = useTranslation()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: yupResolver(contactSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
                setTimeout(() => setSubmitStatus('idle'), 3000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: t('contact.email'),
            value: "omarmooataz26@gmail.com",
            href: "mailto:omarmooataz26@gmail.com",
        },
        {
            icon: GitBranch,
            label: t('contact.github'),
            value: "Omar2610sa",
            href: "https://github.com/Omar2610sa",
        },
        {
            icon: MapPin,
            label: t('contact.location'),
            value: t('contact.locationDetails'),
            href: "#",
        },
    ]

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">

                {/* Gradient accent */}
                <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-60 rounded-full blur-3xl bg-primary/10" />
                
                {/* Header */}
                <div data-aos="fade-up">
                    <SectionHeader 
                        badge={t('contact.badge')} 
                        description={t('contact.description')} 
                        title={t('contact.title')} 
                        highlight={t('contact.highlight')} 
                    />
                </div>

                {/* Content */}
                <div data-aos="fade-down" className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    {/* Left Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-2xl bg-surface border border-border space-y-5">
                        <h3 className="text-lg font-semibold text-text">
                            {t('contact.sendMessage')}
                        </h3>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                                Message sent successfully! ✓
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                                Error sending message. Try again!
                            </div>
                        )}

                        {/* Name */}
                        <div>
                            <label className="text-sm text-text-muted block mb-1">{t('contact.name')}</label>
                            <Input 
                                {...register('name')}
                                className={`w-full px-4 py-2 rounded-lg bg-background border text-text outline-none focus:border-primary transition ${
                                    errors.name ? 'border-red-500' : 'border-border'
                                }`}
                                placeholder={t('contact.placeholders.name')} 
                                type="text" 
                            />
                            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-text-muted block mb-1">{t('contact.email')}</label>
                            <Input 
                                {...register('email')}
                                className={`w-full px-4 py-2 rounded-lg bg-background border text-text outline-none focus:border-primary transition ${
                                    errors.email ? 'border-red-500' : 'border-border'
                                }`}
                                placeholder={t('contact.placeholders.email')}
                                type="email" 
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-sm text-text-muted block mb-1">{t('contact.phone')}</label>
                            <Input 
                                {...register('phone')}
                                className={`w-full px-4 py-2 rounded-lg bg-background border text-text outline-none focus:border-primary transition ${
                                    errors.phone ? 'border-red-500' : 'border-border'
                                }`}
                                placeholder={t('contact.placeholders.phone')}
                                type="tel" 
                            />
                            {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm text-text-muted block mb-1">{t('contact.message')}</label>
                            <textarea 
                                {...register('message')}
                                className={`w-full px-4 py-2 rounded-lg bg-background border text-text outline-none focus:border-primary transition resize-none ${
                                    errors.message ? 'border-red-500' : 'border-border'
                                }`}
                                placeholder={t('contact.placeholders.message')}
                                rows={5}
                            />
                            {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                        </div>

                        {/* Submit */}
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 rounded-full bg-primary text-gray-200 font-medium hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : t('contact.button')} <SendIcon className="w-4 h-4" />
                        </button>
                    </form>
                    
                    {/* Right Contact Info */}
                    <div className="rounded-3xl p-6">
                        <h3 className="text-xl font-semibold mb-6 text-text">{t('contact.infoTitle')}</h3>
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