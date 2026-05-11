"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { OfferCard } from "@/components/ui/offer-card"

const offers = [
  {
    name: "Chicken Tex-Mex-Indi Bowl",
    price: 399,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
  },
  {
    name: "Zinger Burgers",
    price: 299,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
  },
  {
    name: "Classic Salted Fries",
    price: 199,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=400&fit=crop",
  },
  {
    name: "Cheesy Alfredo",
    price: 349,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
  },
]

export function TopOffersSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading title="Top Offers This Week" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {offers.map((offer) => (
            <OfferCard
              key={offer.name}
              name={offer.name}
              price={offer.price}
              image={offer.image}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
        </div>
      </div>
    </section>
  )
}
