"use client"

import Image from "next/image"
import { Search, CalendarDays, Truck, ChefHat, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <span>🔥</span> Freshly Grilled Cheese
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-muted-foreground">ARTISAN ITALIAN FLAVORS</span>
              <br />
              <span className="text-primary">ELEVATED INDULGENCE</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg">
              WHERE TRADITION MEETS INNOVATION. EVERY DISH IS HANDCRAFTED WITH PREMIUM INGREDIENTS AND SERVED WITH AUTHENTICITY IN ARTISAN VIBES.
            </p>

            {/* Search/Book Section */}
            <div className="bg-card rounded-xl p-4 shadow-lg border border-border max-w-md">
              <p className="text-sm text-muted-foreground mb-3">Search for your fave dish</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input placeholder="Book A Table" className="pl-10" />
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-xl">
                <p className="text-xs">Save the Savings on Your</p>
                <p className="text-2xl font-bold">15%</p>
                <p className="text-xs">Favorite Dishes!</p>
              </div>
              <Button variant="outline" className="border-primary text-primary">
                Signature Recipe
              </Button>
            </div>
          </div>

          {/* Right Content - Food Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop"
                alt="Delicious Pizza"
                fill
                className="object-cover rounded-full shadow-2xl"
                priority
              />
              {/* Floating labels */}
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
                Country Herb Roast
              </div>
              <div className="absolute bottom-20 right-0 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
                Creamy Herb Sauce
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Easy to Order</h3>
              <p className="text-sm text-muted-foreground">Quick and simple ordering process</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <ChefHat className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Consistency</h3>
              <p className="text-sm text-muted-foreground">Same great taste every time</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Best Quality</h3>
              <p className="text-sm text-muted-foreground">Premium ingredients only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
