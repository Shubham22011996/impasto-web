"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface OfferCardProps {
  name: string
  price: number
  image: string
  href?: string
  className?: string
}

export function OfferCard({
  name,
  price,
  image,
  href = "/menu",
  className,
}: OfferCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-medium text-foreground text-sm mb-1 line-clamp-1">{name}</h3>
        <span className="text-primary font-bold">₹{price}</span>
      </div>
    </Link>
  )
}
