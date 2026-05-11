"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  image: string
  rating: number
  text: string
  className?: string
}

export function TestimonialCard({
  name,
  image,
  rating,
  text,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl p-6 shadow-sm border border-border relative",
        className
      )}
    >
      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < rating ? "fill-accent text-accent" : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
    </div>
  )
}
