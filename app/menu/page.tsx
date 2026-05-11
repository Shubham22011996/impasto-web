import { Metadata } from "next"
import { MenuHero } from "@/components/sections/menu-hero"
import { WeekendDeals } from "@/components/sections/weekend-deals"
import { MenuGrid } from "@/components/sections/menu-grid"
import { SpecialDish } from "@/components/sections/special-dish"
import { TopOffersSection } from "@/components/sections/top-offers-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Menu | Impasto Café - Best Italian Food in Noida",
  description: "Explore our delicious menu featuring signature pizzas, pasta bowls, calzones, and more. Fresh ingredients, authentic Italian flavors.",
}

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <WeekendDeals />
      <MenuGrid />
      <SpecialDish />
      <TopOffersSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
