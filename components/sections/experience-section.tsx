"use client"

import Image from "next/image"

export function ExperienceSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              More Than Food — It&apos;s an
              <br />
              Experience
            </h2>
            <p className="text-white/80 leading-relaxed">
              At Impasto Café, we blend comfort food with gourmet creativity. Whether
              you&apos;re craving a cheesy pizza, creamy pasta, or a refreshing beverage,
              every item is crafted to deliver comfort and indulgence in every bite.
              Our menu reflects a balance of tradition and innovation, ensuring
              something delightful for every taste.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop"
                alt="Delicious pasta dish"
                fill
                className="object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
