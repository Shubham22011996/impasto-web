"use client"

import Image from "next/image"
import { ContactForm } from "@/components/forms/contact-form"

export function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image */}
      <Image
        src="/impasto-contact-page.svg"
       
        alt="Impasto Café Interior"
        fill
        className="object-cover"
        priority
      />
      {/* <img
  src="/impasto-contact-page.svg"
  alt="Impasto Café Interior"
  className="object-cover"
/> */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Logo */}
          <div className="text-white hidden lg:block">
            <div className="mb-4">
              {/* <svg
                viewBox="0 0 100 100"
                className="w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 10 L85 80 Q50 95 15 80 Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <path
                  d="M35 25 L35 45 M45 20 L45 45 M55 20 L55 45 M65 25 L65 45"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M50 45 L50 75"
                  stroke="#2563eb"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="40" cy="60" r="4" fill="#2563eb" />
                <circle cx="55" cy="55" r="3" fill="#2563eb" />
                <circle cx="60" cy="68" r="4" fill="#2563eb" />
              </svg> */}
            </div>
            {/* <h1 className="text-4xl font-serif italic">impasto</h1> */}
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
