"use client"

import Link from "next/link"
import { MapPin, Facebook, Instagram } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo className="h-16 w-16" variant="light" />
          <div className="flex-1 max-w-md w-full">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-2 text-center md:text-left">
              Get latest news and promotions direct in your inbox!
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <p className="text-sm text-white/80 leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">OUR LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-white/80 hover:text-white transition-colors">
                    Menu
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                <div className="flex items-start gap-2 text-white/80">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <p>AF-16, First Floor, Central Market, Sector 120, Noida</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-4">Social Media</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <p className="text-center text-sm text-white/70">
            Copyright © 2026 Recruit. All right reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-40"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}
