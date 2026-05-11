"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { FoodCard } from "@/components/ui/food-card"
import { Button } from "@/components/ui/button"

const featuredDishes = [
  {
    name: "Arrabbiata Sauce",
    price: 250,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    rating: 4.8,
  },
  {
    name: "Hot Honey Drizzle",
    price: 400,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    name: "Caramelized Onions",
    price: 250,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
    rating: 4.7,
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop"
              alt="Italian cuisine"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              SERVING FRESH MOMENTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              ITALIAN FLAVORS THE WAY THEY SHOULD BE —
              <br />
              <span className="text-primary">CRAFTED WITH PASSION</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Impasto Café brings you straightforward flavors of authentic recipes
              and seasonally-led dishes. Made with passion — every creation is prepared with care, quality,
              ingredients, and love for good food — creating a space
              where every visit feels special.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Featured Dishes
            </Button>
          </div>
        </div>

        {/* Dishes Carousel */}
        <div className="relative">
          <SectionHeading
            title="Featured Dishes"
            subtitle="At Impasto Café, every dish is crafted with bold flavors, fresh ingredients, and a touch of creative fusions."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredDishes.map((dish) => (
              <FoodCard
                key={dish.name}
                name={dish.name}
                price={dish.price}
                image={dish.image}
                rating={dish.rating}
                showOrderNow
                showAddToCart={false}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
