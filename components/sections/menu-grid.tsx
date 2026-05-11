"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { CategoryIcon } from "@/components/ui/category-icon"
import { FoodCard } from "@/components/ui/food-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuCategories = [
  { name: "Build Your Own", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop" },
  { name: "Signature Dishes", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&h=100&fit=crop" },
  { name: "Indi Bowls", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop" },
  { name: "Wraps", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=100&h=100&fit=crop" },
  { name: "Grilled Panini", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=100&h=100&fit=crop" },
  { name: "Dessert", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100&h=100&fit=crop" },
  { name: "Beverages", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=100&h=100&fit=crop" },
]

const menuTabs = [
  "Signature Pizza Builds",
  "Signature Calzone Builds",
  "Signature Pasta Bowls",
]

const sidebarItems = [
  "Sweet Heat",
  "Delhi Makhani",
  "Max Chicken",
  "Green Goddess",
  "Peri-Peri Wave",
  "Pepperoni",
  "Meat Overload",
]

const menuItems = [
  {
    name: "Arrabbiata Sauce",
    description: "Spicy marinara, chili flakes, garlic, topped with parmesan cheese.",
    price: 450,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    rating: 4.8,
  },
  {
    name: "Chicken/Paneer",
    description: "Creamy alfredo base with grilled chicken or paneer, mushrooms.",
    price: 450,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    name: "Caramelized Onions",
    description: "Sweet caramelized onions, mozzarella, fresh herbs.",
    price: 450,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
    rating: 4.7,
  },
  {
    name: "Mozzarella",
    description: "Classic margherita with fresh mozzarella and basil.",
    price: 450,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=400&fit=crop",
    rating: 4.8,
  },
  {
    name: "Hot Honey Drizzle",
    description: "Pepperoni, hot honey, chili flakes, mozzarella.",
    price: 450,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    name: "Jalapeños",
    description: "Spicy jalapeños, cream cheese, bacon, mozzarella.",
    price: 450,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=400&fit=crop",
    rating: 4.6,
  },
]

export function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState(1)
  const [activeTab, setActiveTab] = useState(0)
  const [activeSidebarItem, setActiveSidebarItem] = useState(0)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading title="Our Menus" />

        {/* Category Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category, index) => (
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
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {menuTabs.map((tab, index) => (
            <Button
              key={tab}
              variant={activeTab === index ? "default" : "outline"}
              className={cn(
                "rounded-full",
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "border-primary text-primary"
              )}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {sidebarItems.map((item, index) => (
              <button
                key={item}
                className={cn(
                  "w-full text-left px-4 py-3 flex items-center gap-2 transition-colors",
                  activeSidebarItem === index
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                )}
                onClick={() => setActiveSidebarItem(index)}
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full",
                    activeSidebarItem === index ? "bg-white" : "bg-primary"
                  )}
                />
                {item}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <FoodCard
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
