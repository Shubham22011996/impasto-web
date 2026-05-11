"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium mb-2">IMPASTO CAFÉ...</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              FLAVORS THAT COMFORT,
              <br />
              MOMENTS THAT DELIGHT
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Impasto Café, every dish is a celebration of authenticity,
              craftsmanship and fresh ingredients. Inspired by the art of
              traditional baking and modern café culture, our menu brings
              together tender comfort classics, savory pastries, and thoughtfully
              made dishes at Impasto Café — where flavor, creativity, and
              meaningful human connection make experiences you worth
              savoring long after the last bite.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
                alt="Delicious food presentation"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-primary/30 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
