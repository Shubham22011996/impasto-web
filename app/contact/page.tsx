import { Metadata } from "next"
import { ContactHero } from "@/components/sections/contact-hero"
import { SpecialOffer } from "@/components/sections/special-offer"

export const metadata: Metadata = {
  title: "Contact Us | Impasto Café",
  description: "Get in touch with Impasto Café. Visit us at AF-16, First Floor, Central Market, Sector 120, Noida. Book a table or send us a message.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <SpecialOffer />
    </>
  )
}
