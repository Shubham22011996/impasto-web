"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MenuHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Fresh Flavor&apos;s
              <br />
              <span className="text-primary">Warm Hospitality</span>
            </h1>

            {/* Floating labels */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Freshly Grilled Cheese
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Hand-Cut Green Pasta
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Creamy Herb Sauce
              </span>
            </div>

            {/* Rating Card */}
            <div className="bg-card rounded-xl p-4 shadow-lg border border-border max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9</span>
              </div>
              <p className="text-xs text-muted-foreground">
                &quot;Best pizza in town! The crust is perfect and toppings are always fresh.&quot;
              </p>
            </div>

            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                Book A Table
              </Button>
              <Button variant="outline" className="border-primary text-primary">
                Signature Recipe
              </Button>
            </div>
          </div>

          {/* Right Content - Food Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&h=600&fit=crop"
                alt="Fresh pasta dish"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
