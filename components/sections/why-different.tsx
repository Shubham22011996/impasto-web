"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  {
    title: "Handcrafted Recipes",
    description: "Every dish is freshly prepared with attention to detail.",
  },
  {
    title: "Customizable Menu",
    description: "Build your pizza and bowls exactly the way you like.",
  },
  {
    title: "Premium Ingredients",
    description: "Quality produce, rich sauces, and authentic flavors.",
  },
  {
    title: "Modern Café Ambience",
    description: "A warm, aesthetic space perfect for dining and hangouts.",
  },
  {
    title: "Creative Fusion Menu",
    description: "From Tex-Indi bowls to classic Italian favorites.",
  },
]

export function WhyDifferent() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Why Impasto Café is Different
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {feature.title} –{" "}
                    <span className="font-normal text-muted-foreground">
                      {feature.description}
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop"
              alt="Delicious food presentation"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
