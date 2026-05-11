"use client"

import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { TestimonialCard } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    text: "The best Italian food I've ever had! The pasta was perfectly cooked and the flavors were incredible. Will definitely be coming back.",
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "Amazing atmosphere and even better food. The pizza here rivals anything I've had in Italy. Highly recommend the signature dishes!",
  },
  {
    name: "Emily Davis",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Such a cozy cafe with delicious food. Perfect for a date night or catching up with friends. The desserts are to die for!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=800&fit=crop"
          alt="Restaurant ambiance"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading title="Happy Customer" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
