"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  "Ultra-Creamy Alfredo Sauce",
  "Loaded with Melted Cheese",
  "Perfectly Cooked Pasta",
  "Premium Fresh Ingredients",
  "Limited Time 20% Discount",
]

export function SpecialOffer() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Creamy
              <br />
              Cheesy Alfredo
              <br />
              Delight
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Rich, velvety Alfredo pasta
              tossed with melted cheese and
              premium ingredients for the
              ultimate comfort bite.
            </p>
          </div>

          {/* Center - Image with Badge */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop"
                alt="Creamy Alfredo Pasta"
                fill
                className="object-cover rounded-full shadow-2xl"
              />
              {/* Discount Badge */}
              <div className="absolute -top-4 left-4 w-24 h-24 bg-accent rounded-full flex flex-col items-center justify-center text-accent-foreground shadow-lg">
                <span className="text-xs font-medium">UPTO</span>
                <span className="text-2xl font-bold">20%</span>
                <span className="text-xs font-medium">DISCOUNT</span>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
