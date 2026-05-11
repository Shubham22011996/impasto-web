"use client"

import Image from "next/image"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FoodCardProps {
  name: string
  price: number
  image: string
  rating?: number
  description?: string
  showAddToCart?: boolean
  showOrderNow?: boolean
  className?: string
}

export function FoodCard({
  name,
  price,
  image,
  rating = 4.5,
  description,
  showAddToCart = true,
  showOrderNow = false,
  className,
}: FoodCardProps) {
  return (
    <div
      className={cn(
        "group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border",
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
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">Rs. {price}</span>
          {showAddToCart && (
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Add To Cart
            </Button>
          )}
          {showOrderNow && (
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Order Now
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
