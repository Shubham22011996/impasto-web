"use client"

import { Utensils, Heart, Pizza } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"

const features = [
  {
    icon: Utensils,
    title: "Taste the Art of Italian Comfort",
    description:
      "Discover a thoughtfully curated menu featuring traditional recipes with a modern twist. From handcrafted pizzas to customizable delights — crafted to satisfy every taste and moment at Impasto Café.",
  },
  {
    icon: Heart,
    title: "Healthy, Hearty & Customizable",
    description:
      "A vibrant fusion of Tex-Mex and Indian flavors, our bowls are crafted with fresh ingredients, bold spices, and toppings to create a wholesome, satisfying, and customizable meal.",
  },
  {
    icon: Pizza,
    title: "Where Cheese Meets Crust",
    description:
      "Our pizzas are handcrafted with fresh dough, premium toppings, and baked to perfection for a crispy crust and indulgent cheesy experience in every bite.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Why people choose us?
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          We blend fresh ingredients, handcrafted recipes, and customizable flavors to create delicious café
          experiences served with warmth, quality, and consistency in every bite.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
