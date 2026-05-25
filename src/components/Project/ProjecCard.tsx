import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjecCard {
    title: string
    description: string
    liveUrl: string
    image: string
    tags: []
}

export default function ProjecCard({ title,
    description,
    liveUrl,
    image,
    tags,
}: ProjecCard) {
    return (
        <div className=" group relative overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg ">
            {/* Image */}
            <div className="relative h-60 md:h-64 overflow-hidden">
                <Image fill src={image} alt={title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition">

                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
                <h3 className="text-xl font-semibold text-text group-hover:text-primary transition">
                    {title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {
                        tags.map((tag, index) => {
                            return (
                                <span key={index} className=" text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-border ">{tag}</span>
                            )
                        })
                    }
                </div>

                {/* Live Preview */}
                
                <div className="flex items-center  pt-3">
                    <Link href={liveUrl} className=" flex items-center gap-1 text-sm text-text-muted hover:text-primary transition ">
                        <ExternalLink className="w-5 h-5" />
                        Live
                    </Link>
                </div>
            </div>
        </div>
    )
}
