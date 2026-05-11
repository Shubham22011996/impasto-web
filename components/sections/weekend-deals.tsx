"use client"

import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { CountdownTimer } from "@/components/ui/countdown-timer"
import { Button } from "@/components/ui/button"

const deals = [
  {
    name: "Minimal & Classy (Recommended)",
    description: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit. Non quis sed volutpat elementum.",
    price: 10,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
  },
  {
    name: "Fresh Garden Salad",
    description: "Fresh vegetables with our signature dressing.",
    price: 12,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
  },
]

export function WeekendDeals() {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Weekend Deals"
          subtitle="Hurry up! Limited time offers"
        />

        <div className="flex justify-center mb-8">
          <CountdownTimer targetDate={targetDate} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {deals.map((deal) => (
            <div
              key={deal.name}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border flex gap-4"
            >
              <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={deal.image} alt={deal.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  WEEKENDS
                </span>
                <h3 className="font-semibold text-foreground mt-2 mb-1">{deal.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {deal.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${deal.price}.00</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
