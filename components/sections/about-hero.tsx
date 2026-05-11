"use client"

import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <Image
        src="impasto-about.svg"
        alt="Impasto Café Interior"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="mb-4">
            {/* <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 mx-auto"
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
          {/* <h1 className="text-4xl md:text-6xl font-bold font-serif italic">
            impasto
          </h1> */}
          <p className="text-lg md:text-xl mt-2 tracking-wider">
            CARBS / DONE RIGHT
          </p>
        </div>
      </div>
    </section>
  )
}
