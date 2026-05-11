"use client"

import Image from "next/image"
import { CountdownTimer } from "@/components/ui/countdown-timer"
import { Button } from "@/components/ui/button"

export function SpecialDish() {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop"
                alt="Chicken Tex-Mex-Indi Bowl"
                fill
                className="object-cover rounded-full shadow-2xl"
              />
              {/* Decorative ring */}
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full scale-110" />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Chicken
              <br />
              <span className="text-primary">Tex-Mex-Indi Bowl</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Rice • Maska Beans • Herbed Beans • Jalapeño • Salsa
              Warm Charcoal Dal • Dahi • Red Peppers • Chicken Tikka
            </p>

            <CountdownTimer targetDate={targetDate} />

            <Button className="bg-primary hover:bg-primary/90">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
