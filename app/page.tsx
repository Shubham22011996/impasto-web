import { HomeHero } from "@/components/sections/home-hero"
import { AboutSection } from "@/components/sections/about-section"
import { FeaturedDishes } from "@/components/sections/featured-dishes"
import { CategorySection } from "@/components/sections/category-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TopOffersSection } from "@/components/sections/top-offers-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <FeaturedDishes />
      <CategorySection />
      <TestimonialsSection />
      <TopOffersSection />
      <ContactSection />
    </>
  )
}
