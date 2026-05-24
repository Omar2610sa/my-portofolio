import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface LinkButton {
    href: string
    text: string
    icon?: LucideIcon
    iconPosition?: "left" | "right"
    rounded?: boolean
    download?: boolean


    variant?: "primary" | "outline"
}


function LinkButton({
    href,
    text,
    icon: Icon,
    iconPosition = "right",
    rounded,
    download = false,
    variant = 'primary'
}: LinkButton) {
    const baseStyle = `relative px-6 py-3 font-medium ${rounded ? "rounded-full" : "rounded-lg"} inline-flex items-center justify-center gap-2 overflow-hidden text-text border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`

    const variants = {
        primary: `bg-primary text-background border border-none`,
        outline: `bg-transparent text-text hover:text-primary hover:border-primary hover:bg-priamry/10 `
    }
    return (
        <Link className={`${baseStyle} ${variants[variant]}`} href={href}>
            {
                Icon && iconPosition === "left" && (
                    <Icon className="w-5 h-5 z-10 " />
                )
            }
            <span className="z-10">{text}</span>
            {
                Icon && iconPosition === "right" && (
                    <Icon className="w-5 h-5 z-10 " />
                )
            }
        </Link>
    )
}

export default LinkButton