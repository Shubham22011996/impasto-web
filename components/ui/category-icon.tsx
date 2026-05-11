"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface CategoryIconProps {
  name: string
  image: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export function CategoryIcon({
  name,
  image,
  isActive = false,
  onClick,
  className,
}: CategoryIconProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200",
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
        className
      )}
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-white">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <span className="text-xs md:text-sm font-medium whitespace-nowrap">{name}</span>
    </button>
  )
}
