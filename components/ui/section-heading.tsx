import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 md:mb-12", align === "center" && "text-center", className)}>
      {subtitle && (
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  )
}
