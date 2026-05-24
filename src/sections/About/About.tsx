import { Code2, Layers, Zap } from 'lucide-react'

export default function AboutSection() {
    const features = [
        {
            icon: Code2,
            title: 'Clean Code',
            description: 'Maintainable and scalable architecture'
        },
        {
            icon: Layers,
            title: 'Modern Ui',
            description: 'Modern and user-friendly interface design'
        },
        {
            icon: Zap,
            title: 'Performance',
            description: 'Optimized for speed and efficiency'
        }
    ]

    return (
        <section id="about" className="relative min-h-screen overflow-hidden flex items-center py-20">
            {/* Gradient accent */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-60 rounded-full blur-3xl bg-primary/10" />

            <div className="relative z-10 w-[90%] max-w-3xl mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-md border border-border">
                        About Me
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-text max-w-2xl">
                        Hi, I’m <span className='text-primary'>Omar Moataz</span>  Frontend Developer.
                    </h2>

                    <div className="space-y-4 max-w-2xl">
                        Specializing in Next.js, React, and TypeScript, passionate about building modern, responsive, and visually engaging web applications with clean code and smooth user experiences.

                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={feature.title}
                                className="border border-border rounded-lg p-6 bg-primary/5 flex flex-col items-center text-center space-y-4 hover:bg-primary/10 transition-colors"
                            >
                                <Icon className="w-8 h-8 text-primary" />
                                <h3 className="text-primary font-semibold text-lg">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>


            </div>
        </section>
    );
}