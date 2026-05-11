"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { CategoryIcon } from "@/components/ui/category-icon"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { name: "Signature Dish", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop" },
  { name: "Indi Bowls", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop" },
  { name: "Tortilla Wraps", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=100&h=100&fit=crop" },
  { name: "Grilled Panini Sandwi", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=100&h=100&fit=crop" },
  { name: "Sides", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop" },
  { name: "Beverages", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=100&h=100&fit=crop" },
  { name: "Calzone", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop" },
]

const menuTabs = [
  "Build Your Own",
  "Signature Pizza Builds",
  "Signature Calzone Builds",
  "Signature Pasta Bowls",
]

const menuItems = [
  { name: "Sweet Heat", description: "Tomato Marinara + Honey Mustard + Mozzarella + Cheddar/Sausage/Caramelized Onions" },
  { name: "Delhi Makhani", description: "Makhni Base + Paneer + Tomato Marinara + Mozzarella + Hot Mayo" },
  { name: "Max Chicken", description: "Marinara + Barbeque Chicken + Classic Tomato/Spicy Tomato" },
  { name: "Green Goddess", description: "Pesto Base + Paneer + Capsicum + Mozzarella + Zucchini" },
  { name: "Peri-Peri Wave", description: "Tomato Marinara + Mozzarella Baby Corn/Peri-Peri Chicken" },
  { name: "Pepperoni", description: "Classic Pepperoni Pizza" },
  { name: "Meat Overload", description: "Malaysian Beef, Bacon + Chicken Sausage Crumble" },
]

export function CategorySection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeTab, setActiveTab] = useState(1)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Choose by Category"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />

        {/* Category Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <CategoryIcon
              key={category.name}
              name={category.name}
              image={category.image}
              isActive={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            />
          ))}
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-border pb-4">
          {menuTabs.map((tab, index) => (
            <Button
              key={tab}
              variant={activeTab === index ? "default" : "ghost"}
              className={cn(
                "rounded-full",
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="bg-primary text-primary-foreground px-6 py-4">
            <h3 className="font-semibold text-lg">Signature Pizza Builds</h3>
          </div>
          <div className="divide-y divide-border">
            {menuItems.map((item) => (
              <div key={item.name} className="px-6 py-4 hover:bg-secondary/50 transition-colors">
                <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
