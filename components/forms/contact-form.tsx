"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ContactFormProps {
  variant?: "default" | "overlay"
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name*
          </label>
          <Input id="firstName" placeholder="First Name" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name*
          </label>
          <Input id="lastName" placeholder="Last Name" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email*
          </label>
          <Input id="email" type="email" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone number*
          </label>
          <Input id="phone" type="tel" placeholder="Phone number" required />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <Input id="subject" placeholder="Subject" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message*
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
          placeholder="Your message"
          required
        />
      </div>
      <Button
        type="submit"
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        Send A Message
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
