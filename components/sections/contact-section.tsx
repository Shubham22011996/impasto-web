"use client"

import Image from "next/image"
import { ContactForm } from "@/components/forms/contact-form"

export function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
              alt="Restaurant interior"
              width={800}
              height={600}
              className="object-cover w-full h-full min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Bringing People
                <br />
                Together Over
                <br />
                Great Food
              </h2>
              <p className="text-white/80 max-w-sm">
                A cozy and welcoming restaurant offering freshly prepared
                meals, friendly service, and a relaxing atmosphere for all food
                lovers. Experience elegant dining with gourmet dishes crafted by
                expert chefs in a sophisticated setting.
              </p>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
