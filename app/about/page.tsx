import { Metadata } from "next"
import { AboutHero } from "@/components/sections/about-hero"
import { OurStory } from "@/components/sections/our-story"
import { WhyDifferent } from "@/components/sections/why-different"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "About Us | Impasto Café - Our Story",
  description: "Learn about Impasto Café - a cozy café where artisanal food meets modern comfort. Discover our story, values, and commitment to quality.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhyDifferent />
      <WhyChooseUs />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}
