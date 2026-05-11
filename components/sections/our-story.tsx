"use client"

import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            ABOUT US
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Impasto Café was born from a simple idea — to create a
                cozy café where artisanal food meets modern comfort.
                Inspired by handcrafted cooking traditions, we specialize
                in pizzas, pastas, bowls, and freshly baked delights made
                with premium ingredients and authentic flavors.
              </p>
              <p>
                Our goal is to offer more than just food — we create
                experiences where people connect, relax, and indulge in
                meals prepared with care and creativity.
              </p>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop"
                alt="Our signature pizza"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop"
                alt="Fresh pasta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
